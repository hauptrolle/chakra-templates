import type { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import NProgress from 'nprogress';

import { theme } from '../theme';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&family=Inter:wght@400;500;600;700&family=Fira+Code&display=swap"
          rel="stylesheet"
        />
        {process.env.NODE_ENV === 'production' && (
          <script async src="https://cdn.splitbee.io/sb.js" />
        )}
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
