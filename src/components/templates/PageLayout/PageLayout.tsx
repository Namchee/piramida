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
}: React.PropsWithChildren<unknown>): JSX.Element {
  return (
    <>
      <Head>
        <title>Piramida</title>
        <link rel="icon" href="icons/favicon.ico" />
        <link rel="icon" href="icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="preload"
          href="/api/status"
          as="fetch"
          crossOrigin="anonymous"
        />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content="/images/og-banner.png"></meta>
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex flex-col flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default PageLayout;
