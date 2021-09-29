import * as React from 'react';

import Image from 'next/image';

/**
 * Component to be shown when the search result is empty.
 *
 * @return {JSX.Element} empty result component
 */
function EmptyResult(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center
      text-center
      p-8">
      <Image
        src="/images/empty-result.svg"
        width="full"
        height="full"
        alt="Produk investasi tidak ditemukan"
      />

      <h1 className="mt-4 text-gray-600
        leading-relaxed
        tracking-tight">
        Produk Investasi Tidak Ditemukan
      </h1>

      <p className="text-sm
        text-gray-400
        mb-8">
        Entitas investasi yang Anda cari tidak dapat ditemukan
        dalam basis data Otoritas Jasa Keuangan Republik Indonesia.
      </p>

      <p>
        Anda disarankan untuk tidak melakukan transaksi apapun
        dengan entitas investasi ini.
      </p>
    </div>
  );
}

export default EmptyResult;
