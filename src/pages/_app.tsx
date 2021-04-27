import * as React from 'react';

import Router from 'next/router';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { theme, Fonts } from '@/styles/theme';
import { Layout } from '@/components/templates/PageLayout';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
