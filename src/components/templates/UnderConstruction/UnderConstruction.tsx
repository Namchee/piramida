import * as React from 'react';

import Link from 'next/link';

/**
 * Under construction page. Useful when you are lazy but
 * want to release the damn thing already.
 *
 * @return {JSX.Element} under construction page
 */
function UnderConstruction(): JSX.Element {
  return (
    <>
      <div role="image" className="max-w-xl
        mx-auto
        flex-1
        text-7xl
        min-h-24 max-h-32
        2xl:max-h-48
        flex items-end
        leading-relaxed">
        🚧
      </div>

      <h1 className="text-5xl
        font-bold
        max-w-prose
        tracking-tight
        leading-loose
        mx-auto">
        Sedang Dikembangkan
      </h1>

      <p className="max-w-lg
        text-gray-500
        mx-auto
        text-center
        text-lg
        leading-relaxed">
        Mohon maaf, namun halaman yang Anda akses masih dalam tahap
        pengembangan. Untuk sementara, dokumentasi API dapat diakses
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

      <Link href="/" passHref={true}>
        <a
          className="
        text-primary
        hover:text-primary-dark
        mt-12
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

export default UnderConstruction;
