import * as React from 'react';

import Head from 'next/head';
import endent from 'endent';

import { CodeBox } from '@/components/elements/CodeBox';

export const CodeContext = React.createContext(undefined);

/**
 * API Documentation.
 * TODO: Do this
 *
 * @return {JSX.Element} API Documentation page
 */
function Docs(): JSX.Element {
  const [highlighter, setHighlighter] = React.useState(null);
  const value = { highlighter, setHighlighter };

  return (
    <CodeContext.Provider value={value}>
      <Head>
        <title>Dokumentasi API — Piramida</title>
        <meta
          name="description"
          content="Dokumentasi API publik Piramida"
        ></meta>
      </Head>

      <article
        className="flex
        w-full
        max-w-6xl
        mx-auto
        <md:px-6 <md:py-6
        space-x-16
        py-16"
      >
        <aside className="hidden md:block px-8">
          <div className="sticky top-16">
            <p
              className="text-gray-700
              uppercase
              font-bold
              text-sm
              mb-6
              tracking-wide"
            >
              Dokumentasi API
            </p>
            <ul className="space-y-4">
              <li className="text-gray-500 tracking-tight text-lg">Foo bar</li>
            </ul>
          </div>
        </aside>
        <div
          className="flex-1
          prose md:prose-xl
          px-16
          text-gray-600"
        >
          <h1 className="text-gray-800 tracking-tight">Dokumentasi API</h1>

          <p>
            <b>Piramida</b> menyediakan layanan API publik yang dapat diakses
            melalui tautan{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ojk-invest-api.vercel.app/api"
            >
              https://ojk-invest-api.vercel.app/api
            </a>
            . Data yang disajikan oleh API <b>Piramida</b> diperbaharui setiap
            hari pada pukul 00:00 Waktu Indonesia Barat (WIB).
          </p>
          <p>
            Seluruh respon dari permintaan yang dikirimkan pada API{' '}
            <b>Piramida</b> memiliki <i>cache</i> publik yang disimpan selama 24
            jam sejak pengembalian respon pertama.
          </p>
          <p>
            Terdapat dua bentuk API yang disediakan oleh <b>Piramida</b>,
            yaitu{' '} <strong>REST API</strong> dan{' '}
            <strong>GraphQL API</strong>.
          </p>

          <h2>REST API</h2>
          <h4>Bentuk Data</h4>
          <p>
            Setiap data yang dikembalikan oleh REST API akan dikembalikan dalam
            bentuk <b>JSON</b>. Berikut merupakan contoh data yang dikembalikan
            oleh API <b>Piramida</b>.
          </p>
          <CodeBox lang="json">
            {endent`{
              "data": {},
              "error": ""
            }`}
          </CodeBox>
          <p>
            Data kembalian dari REST API <b>Piramida</b> memiliki dua buah
            properti, yaitu:
          </p>
          <ul>
            <li>
              <code>data</code> &ndash; <code>object</code>
              <p>
                Data dari hasil permintaan yang dikembalikan. Akan bernilai{' '}
                <code>null</code> apabila <code>error</code>
                tidak bernilai <code>null</code>.
              </p>
            </li>
            <li>
              <code>error</code> &ndash; <code>string</code>
              <p>
                Pesan kesalahan yang terjadi selama API melayani permintaan.
                Akan bernilai <code>null</code> apabila <code>data</code> tidak
                bernilai <code>null</code>.
              </p>
            </li>
          </ul>
          <p>
            Nilai kembalian dari <code>data</code> akan selalu memiliki dua
            properti berikut.
          </p>
          <ul>
            <li>
              <code>&lt;nama_entitas&gt;</code> &ndash; <code>object</code>
              <p>
                Entitas yang dicari. Dapat merupakan kumpulan entitas
                dalam bentuk <i>array</i> atau sebuah entitas tunggal.
              </p>
            </li>
            <li>
              <code>version</code> &ndash; <code>string</code>
              <p>
                Tanggal pembaharuan data. Memiliki format{' '}
                <code>DD/MM/YYYY</code>.
              </p>
            </li>
          </ul>
          <p>
            Seluruh <i>endpoint</i> yang mengembalikan banyak entitas
            sekaligus akan memiliki satu buah properti tambahan.
          </p>
          <ul>
            <li>
              <code>count</code> &ndash; <code>int</code>
              <p>
                Jumlah entitas yang memenuhi kriteria pencarian.
              </p>
            </li>
          </ul>
          <h4>Status HTTP</h4>
          <p>
            Terdapat tiga buah respon HTTP yang dapat dikembalikan sebagai
            respon permintaan oleh REST API <b>Piramida</b>, yaitu:
          </p>
          <ul>
            <li>
              <strong>200</strong>
              <p>
                Permintaan berhasil diproses dan data berhasil dikembalikan.
              </p>
            </li>
            <li>
              <strong>400</strong>
              <p>
                Terdapat parameter permintaan yang salah atau memiliki nilai
                yang tidak diizinkan.
              </p>
            </li>
            <li>
              <strong>405</strong>
              <p>
                Permintaan dikirimkan menggunakan <i>method</i> HTTP yang tidak
                diizinkan. Seluruh <i>endpoint</i> dalam
                API <b>Piramida</b> hanya dapat
                dipanggil menggunakan <i>method</i> <code>GET</code>.
              </p>
            </li>
            <li>
              <strong>500</strong>
              <p>Terdapat kesalahan tidak terduga yang dialami oleh peladen.</p>
            </li>
          </ul>

          <h3>
            Endpoint `apps`
          </h3>
          <p>
            Kumpulan <i>endpoint</i> yang melayani seluruh permintaan mengenai
            aplikasi manajemen reksa dana resmi yang diizinkan
            oleh Otoritas Jasa Keuangan Republik Indonesia.
          </p>
          <p>
            Aplikasi manajemen reksa dana resmi memiliki bentuk data berikut:
          </p>
          <CodeBox lang="json">
            {endent`{
              "id": 1,
              "name": "ACME Inc.",
              "url": "https://www.example.com",
              "owner": "PT. Budi Makmur"
            }`}
          </CodeBox>
          <p>
            Berikut merupakan penjelasan dari setiap properti yang dimiliki
            oleh data aplikasi manajemen reksa dana.
          </p>
          <ul>
            <li>
              <p>
                <b>id</b> &ndash; <code>int</code>
              </p>
              <p>
                Nomor ID aplikasi sesuai data yang disimpan dalam
                data Otoritas Jasa Keuangan Republik Indonesia.
              </p>
            </li>
            <li>
              <p>
                <b>name</b> &ndash; <code>string</code>
              </p>
              <p>
                Nama aplikasi manajemen reksa dana yang diizinkan
                oleh Otoritas Jasa Keuangan Republik Indonesia.
              </p>
            </li>
            <li>
              <p>
                <b>url</b> &ndash; <code>string</code>
              </p>
              <p>
                Halaman situs pihak penyedia aplikasi.
              </p>
            </li>
            <li>
              <p>
                <b>owner</b> &ndash; <code>string</code>
              </p>
              <p>
                Pihak pemilik aplikasi. Dapat berupa individu atau
                badan usaha resmi.
              </p>
            </li>
          </ul>
          <h4>
            <code>GET &mdash; /api/apps</code>
          </h4>
          <p>
            Mengembalikan seluruh aplikasi manajemen investasi atau portal
            transaksi investasi yang telah dinyatakan legal oleh Otoritas Jasa
            Keuangan Republik Indonesia.
          </p>
          <b>
            Parameter Permintaan
          </b>
          <ul>
            <li>
              <p>
                <b>name</b> &ndash; <code>string</code>
              </p>
              <p>
                Pola nama yang ingin dicari dari daftar aplikasi.
              </p>
            </li>
            <li>
              <p>
                <b>limit</b> &ndash; <code>int</code>
              </p>
              <p>
                Jumlah data maksimum yang dapat dikembalikan.
              </p>
            </li>
            <li>
              <p>
                <b>offset</b> &ndash; <code>int</code>
              </p>
              <p>
                Indeks pertama dari data yang diminta.
              </p>
            </li>
          </ul>
          <h4>
            <code>GET &mdash; /api/apps/:id</code>
          </h4>
          <p>
            Mengembalikan sebuah aplikasi manajemen reksa dana legal yang
            diizinkan oleh Otoritas Jasa Keuangan Republik Indonesia yang
            memiliki nomor ID yang sama dengan parameter <code>id</code>.
          </p>
          <b>
            Parameter Permintaan
          </b>
          <ul>
            <li>
              <p>
                <b>id</b> &ndash; <code>string</code>
              </p>
              <p>
                Nomor identitas dari aplikasi manajemen reksa dana yang
                diinginkan.
              </p>
            </li>
          </ul>
        </div>
      </article>
    </CodeContext.Provider>
  );
}

export default Docs;
