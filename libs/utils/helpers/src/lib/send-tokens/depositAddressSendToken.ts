import { ethers } from 'ethers';
import { AxelarAssetTransfer, Environment } from '@axelar-network/axelarjs-sdk';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  IERC20__factory as IERC20,
  IAxelarGateway__factory as IAxelarGateway,
} from '../../../contracts/factories/@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces';
import {
  srcChain,
  srcConnectedWallet,
  destChain,
  destConnectedWallet,
} from '@axl-demo/utils/constants';
import { getDepositAddressLocal } from './getDepositAddressLocal';
import { sleep } from '../sleep';
import { getTransferFee } from './getTransferFee';

const srcGatewayContract = IAxelarGateway.connect(
  srcChain.gateway,
  srcConnectedWallet
);
const destGatewayContract = IAxelarGateway.connect(
  destChain.gateway,
  destConnectedWallet
);

export async function depositAddressSendToken(
  amount: string,
  recipientAddress: string,
  onSent: (data: {
    txHash: string;
    depositAddress: string;
    transferFee: number;
  }) => void
) {
  let depositAddress: string;

  if (process.env['NEXT_PUBLIC_ENVIRONMENT'] === 'testnet') {
    const api = new AxelarAssetTransfer({ environment: Environment.TESTNET });
    depositAddress = await api.getDepositAddress(
      srcChain.name,
      destChain.name,
      recipientAddress,
      'uausdc'
    );
  } else {
    depositAddress = (await getDepositAddressLocal(
      srcChain.name,
      destChain.name,
      recipientAddress,
      'aUSDC',
      8500
    )) as string;
  }

  // Get token address from the gateway contract for the src chain
  const srcTokenAddress = await srcGatewayContract.tokenAddresses('aUSDC');
  const srcErc20 = IERC20.connect(srcTokenAddress, srcConnectedWallet);

  // Get token address from the gateway contract for the destination chain
  const destinationTokenAddress = await destGatewayContract.tokenAddresses(
    'aUSDC'
  );
  const destERC20 = IERC20.connect(
    destinationTokenAddress,
    destConnectedWallet
  );

  const destBalance = await destERC20.balanceOf(recipientAddress);

  const transferFee: number = await getTransferFee(
    srcChain.name,
    destChain.name,
    'aUSDC',
    amount
  );

  // Send the token
  const txHash = await srcErc20
    .transfer(depositAddress, ethers.utils.parseUnits(amount, 6))
    .then((tx: any) => tx.wait())
    .then((receipt: any) => receipt.transactionHash);

  onSent({ txHash, depositAddress, transferFee });

  // Wait destination contract to execute the transaction.
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const newBalance = await destERC20.balanceOf(recipientAddress);
    if (!destBalance.eq(newBalance)) break;
    await sleep(2000);
  }
}
