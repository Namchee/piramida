import * as React from 'react';

import Head from 'next/head';

import { SearchInvesment } from '@/components/modules/SearchInvestment';

/**
 * Landing page
 *
 * @return {JSX.Element}
 */
function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Periksa Legalitas Investasi — Piramida</title>
      </Head>
      <h1
        className="flex-1
        min-h-24 max-h-32
        2xl:max-h-48
        flex justify-center items-end
        font-bold
        leading-snug
        text-7xl"
      >
        Profit atau Ponzi?
      </h1>
      <p
        className="text-center
          text-2xl
        text-gray-500
        leading-loose"
      >
        Periksa legalitas produk investasi pilihan Anda
      </p>
      <div className="mt-8 mx-auto w-full max-w-lg flex-1">
        <SearchInvesment absolute />
      </div>
    </>
  );
}

export default Home;
