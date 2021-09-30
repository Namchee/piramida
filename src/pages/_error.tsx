import * as React from 'react';

import { NextPageContext } from 'next';
import { ErrorProps } from 'next/error';

import Link from 'next/link';

import { ErrorBanner } from '@/components/elements/Image';

interface ErrorMessage {
  title: string;
  content: string;
}

const errorMap = new Map<number, ErrorMessage>([
  [
    404,
    {
      title: 'Halaman Tidak Ditemukan',
      content: 'Halaman yang Anda tuju tidak dapat ditemukan dalam situs ini.',
    },
  ],
  [
    500,
    {
      title: 'Kesalahan Sistem',
      // eslint-disable-next-line
      content: 'Terdapat kesalahan pada sistem. Silahkan coba lagi dalam beberapa saat.',
    },
  ],
]);

/**
 * Custom error page to replace the default one
 *
 * @param {ErrorProps} props error page props
 * @return {JSX.Element} custom error page
 */
function ErrorPage({ title, statusCode }: ErrorProps): JSX.Element {
  if (statusCode === 500 && process.env.NODE_ENV === 'development') {
    console.error(title);
  }

  return (
    <>
      <div className="w-full
        mx-auto
        flex justify-center items-end
        flex-1
        min-h-24 max-h-48
        2xl:max-h-64">
        <ErrorBanner className="w-56 h-auto" />
      </div>

      <h1 className="text-6xl
        text-center
        text-gray-700">
        {statusCode || 500}
      </h1>

      <h1 className="text-3xl
        text-center
        text-gray-700">
        {errorMap.get(statusCode || 500).title}
      </h1>

      <p className="
        text-gray-500
        mt-2
        max-w-md
        text-center
        mx-auto
        leading-relaxed
        2xl:text-lg">
        {errorMap.get(statusCode || 500).content}
      </p>

      <Link href="/" passHref={true}>
        <a className="
        text-primary
        hover:text-primary-dark
        mt-8
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

/**
 * Analyze the cause of the error and pass correct params.
 *
 * @param {NextPageContext} props page context
 * @return {ErrorProps} error props
 */
ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { title: err.message, statusCode };
};

export default ErrorPage;
