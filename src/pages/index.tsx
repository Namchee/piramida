import * as React from 'react';
import Head from 'next/head';
import { Navigation } from '@/components/layout/Navigation';

function Home() {
  return (
    <>
      <Head>
        <title>Periksa Legalitas Invetasi — Piramida</title>
      </Head>
      <Navigation />
    </>
  );
}

export default Home;
