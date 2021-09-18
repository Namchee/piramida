import * as React from 'react';

import Head from 'next/head';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

/**
 * Persisted page layout for all page in the application
 *
 * @return {JSX.Element}
 */
function PageLayout({
  children,
}: React.PropsWithChildren<Record<string, never>>): JSX.Element {
  return (
    <>
      <Head>
        <title>Piramida</title>
        <link rel="icon" href="icons/favicon.ico" />
        <link rel="icon" href="icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PageLayout;
