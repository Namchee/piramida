import * as React from 'react';

import Head from 'next/head';

import { SearchInvesment } from '@/components/elements/SearchInvestment';

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
        className="md:flex-1
        <md:min-h-20 <md:max-h-24
        min-h-28 max-h-32
        2xl:max-h-48
        flex justify-center items-end
        font-bold
        <md:tracking-tight
        leading-snug
        text-7xl
        <md:text-4xl"
      >
        Profit atau Ponzi?
      </h1>
      <p
        className="text-center
          <md:max-w-xs
          mx-auto
          text-lg
          md:text-2xl
          text-gray-500
          md:leading-loose"
      >
        Periksa legalitas produk investasi pilihan Anda
      </p>
      <div className="mt-8
        mx-auto
        w-full
        max-w-lg
        flex-1
        <md:px-8">
        <SearchInvesment absolute />
      </div>
    </>
  );
}

export default Home;
