import * as React from 'react';

import Head from 'next/head';

import { UnderConstruction } from '@/components/templates/UnderConstruction';

/**
 * API Documentation.
 * TODO: Do this
 *
 * @return {JSX.Element} API Documentation page
 */
function Docs(): JSX.Element {
  return (
    <>
      <Head>
        <title>Dokumentasi API — Piramida</title>
      </Head>

      <UnderConstruction />
    </>
  );
}

export default Docs;
