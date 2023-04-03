import { UiCard } from '@axl-demo/ui/card';
import React from 'react';

export function Index() {
  return (
    <div>
      <h1 className="text-4xl font-medium text-center">Axelar Web Examples</h1>
      <div className="flex flex-wrap justify-center mt-8">
        <UiCard
          classname="mx-2 my-2"
          title="Send message to another chain"
          description="Transfer messages from the source chain to the destination chain using the Axelar Gateway's callContract function."
          url="/examples/call-contract"
        />
        <UiCard
          classname="mx-2 my-2"
          title="Send token to another chain"
          description="Simply sending a token from source chain to the destination chain"
          url="/examples/send-tokens"
        />
        <UiCard
          classname="mx-2 my-2"
          title="Send token with custom logic to another chain"
          description="Transfer tokens and execute custom logic to the destination chain using the callContractWithToken function of the Axelar Gateway contract."
          url="/examples/call-contract-with-token"
        />
        <UiCard
          classname="mx-2 my-2"
          title="Send NFTs Between Chains"
          description="Send a NFT token from source chain to the destination chain"
          url="/examples/nft-linker"
        />
      </div>
    </div>
  );
}

export default Index;
