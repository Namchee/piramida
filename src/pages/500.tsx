import * as React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { ErrorBanner } from '@/components/elements/Image';

/**
 * Custom error page to replace the default one
 *
 * @return {JSX.Element} custom error page
 */
function InternalServerError(): JSX.Element {
  return (
    <>
      <Head>
        <title>Terjadi Kesalahan Sistem - Piramida</title>
      </Head>

      <div className="w-full
        mx-auto
        flex justify-center items-end
        flex-1
        min-h-24 max-h-48
        2xl:max-h-64">
        <ErrorBanner className="w-48 md:w-56 h-auto" />
      </div>

      <h1 className="text-3xl
        md:text-6xl
        text-center
        text-gray-700">
        500
      </h1>

      <h1 className="text-xl
        md:text-3xl
        text-center
        text-gray-700">
        Kesalahan Sistem
      </h1>

      <p className="
        text-gray-500
        mt-4
        px-6
        max-w-md
        text-center
        mx-auto
        leading-relaxed
        2xl:text-lg">
        Terdapat kesalahan pada sistem.
        Silahkan coba kembali dalam beberapa saat.
      </p>

      <Link href="/" passHref={true}>
        <a className="
        text-primary
        hover:text-primary-dark
        my-12
        max-w-md
        text-center
        mx-auto
        leading-relaxed
        text-sm
        2xl:text-base">
        Kembali ke halaman utama
        </a>
      </Link>
    </>
  );
}

export default InternalServerError;
