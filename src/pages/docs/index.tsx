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

      <UnderConstruction>
        <p className="px-6
          text-gray-500
          mx-auto
          max-w-md
          text-center
          md:text-lg">
          Untuk sementara, dokumentasi API dapat diakses
          melalui tautan <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Namchee/ojk-invest-api#endpoint"
            className="text-primary
              transition-colors
              hover:text-primary-light">
            berikut
          </a>.
        </p>
      </UnderConstruction>
    </>
  );
}

export default Docs;
