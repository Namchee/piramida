import * as React from 'react';

import Link from 'next/link';

import { NotFoundBanner } from '@/components/elements/Image';

/**
 * 404 page
 *
 * @return {JSX.Element} 404 page
 */
function NotFoundPage(): JSX.Element {
  return (
    <>
      <div
        className="w-full
        mx-auto
        flex justify-center items-end
        flex-1
        min-h-24 max-h-48
        2xl:max-h-64"
      >
        <NotFoundBanner className="w-56 h-auto" />
      </div>

      <h1
        className="text-6xl
        text-center
        text-gray-700"
      >
        404
      </h1>

      <h1
        className="text-3xl
        text-center
        text-gray-700"
      >
        Halaman Tidak Ditemukan
      </h1>

      <p
        className="
        text-gray-500
        mt-2
        max-w-md
        text-center
        mx-auto
        leading-relaxed
        2xl:text-lg"
      >
        Halaman yang Anda tuju tidak dapat ditemukan dalam situs ini.
        Silahkan periksa tautan yang Anda masukkan.
      </p>

      <Link href="/" passHref={true}>
        <a
          className="
        text-primary
        hover:text-primary-dark
        mt-8
        max-w-md
        text-center
        mx-auto
        leading-relaxed
        text-sm
        2xl:text-base"
        >
          Kembali ke halaman utama
        </a>
      </Link>
    </>
  );
}

export default NotFoundPage;
