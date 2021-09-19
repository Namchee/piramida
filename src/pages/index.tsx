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
        min-h-32 max-h-36
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
        text-gray-500"
      >
        Periksa legalitas produk investasi pilihan Anda
      </p>
      <div className="mx-auto max-w-xl flex-1">
        <SearchInvesment />
      </div>
    </>
  );
}

export default Home;
