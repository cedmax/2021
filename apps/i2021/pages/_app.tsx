import { AppProps } from 'next/app';
import Head from 'next/head';
import 'react-vertical-timeline-component/style.min.css';
import './extend.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <base href="/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Italians do it better" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
