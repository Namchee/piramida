import * as React from 'react';

import Head from 'next/head';

// import { UnderConstruction } from '@/components/templates/UnderConstruction';

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
        <meta
          name="description"
          content="Dokumentasi API publik Piramida"></meta>
      </Head>

      <article className="flex
        w-full
        max-w-6xl
        mx-auto
        <md:px-6 <md:py-6
        py-12">
        <div className="px-8">
          <ul className="sticky top-0">
            <p className="text-gray-700 uppercase font-bold text-sm">
              Dokumentasi API
            </p>
          </ul>
        </div>
        <div className="flex-1
          px-12
          prose prose-lg">
          <h1 className="text-gray-700 tracking-tight">
            Dokumentasi API
          </h1>
          <p>
            lorem*10
          </p>
        </div>
      </article>
    </>
  );
}

export default Docs;
