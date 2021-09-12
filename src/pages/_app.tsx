import * as React from 'react';

import Router from 'next/router';

import { AppProps } from 'next/app';

import { Layout } from '@/components/templates/PageLayout';

import NProgress from 'nprogress';

import '@/styles/globals.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
