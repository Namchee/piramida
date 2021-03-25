import * as React from 'react';

import Head from 'next/head';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

/**
 * Persisted page layout for all page in the application
 *
 * @return {JSX.Element}
 */
function PageLayout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <Head>
        <title>Piramida</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>

      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
