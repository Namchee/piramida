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
        space-x-16
        py-12">
        <aside className="px-8">
          <ul className="sticky top-20">
            <p className="text-gray-600 uppercase font-bold text-sm">
              Dokumentasi API
            </p>
          </ul>
        </aside>
        <div className="flex-1
          prose md:prose-xl
          px-16
          text-gray-600">
          <h1 className="text-gray-800 tracking-tight">
            Dokumentasi API
          </h1>
          <p>
            <b>Piramida</b> menyediakan layanan API publik dalam
            bentuk REST API dan GraphQL API yang dapat diakses melalui
            tautan <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ojk-invest-api.vercel.app/api"
            >https://ojk-invest-api.vercel.app/api</a>. Data yang disajikan
            oleh API <b>Piramida</b> diperbaharui setiap 24 jam sekali.
          </p>
          <p>
            Seluruh respon dari permintaan yang dikirimkan pada
            API <b>Piramida</b> memiliki <i>cache</i> publik yang disimpan
            selama 24 jam.
          </p>
          <h2>
            REST API
          </h2>
          <h4>
            Bentuk Data
          </h4>
          <p>
            Setiap data yang dikembalikan oleh REST API dari
            API <b>Piramida</b> memiliki bentuk kembalian seperti berikut.
          </p>
        </div>
      </article>
    </>
  );
}

export default Docs;
