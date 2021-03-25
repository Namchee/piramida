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
      </Head>

      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
