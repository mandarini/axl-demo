import { AppProps } from 'next/app';
import './styles.css';
import { UiLayoutLayout } from '@axl-demo/ui/layout/layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <UiLayoutLayout>
      <Component {...pageProps} />
    </UiLayoutLayout>
  );
}

export default CustomApp;
