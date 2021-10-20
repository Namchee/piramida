import * as React from 'react';

import Head from 'next/head';
import endent from 'endent';

import { CodeBox } from '@/components/elements/CodeBox';
import { Badge } from '@/components/elements/Badge';

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
            Terdapat dua bentuk API yang disediakan oleh <b>Piramida</b>, yaitu{' '}
            <strong>REST API</strong> dan <strong>GraphQL API</strong>.
          </p>

          <h2>Resource</h2>
          <p>
            Terdapat tiga buah <i>resource</i> utama yang disediakan oleh API{' '}
            <b>Piramida</b>.
          </p>
          <h4>Apps</h4>
          <p>
            Apps merupakan entitas yang merepresentasikan sebuah aplikasi
            managemen reksa dana yang diizinkan oleh Otoritas Jasa Keuangan
            Republik Indonesia.
          </p>
          <p>Berikut merupakan salah satu contoh dari entitas Apps.</p>
          <CodeBox lang="json">
            {endent`{
              "id": 1,
              "name": "ACME Inc.",
              "url": "https://www.example.com",
              "owner": "PT. Budi Makmur"
            }`}
          </CodeBox>
          <p>
            Apps memiliki empat buah properti yang masing-masing menyimpan
            informasi-informasi berikut.
          </p>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">id</span>
                <Badge.Green>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
              </p>
              <p>
                Nomor ID aplikasi sesuai data yang disimpan oleh Otoritas Jasa
                Keuangan Republik Indonesia.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">name</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>
                Nama aplikasi managemen reksa dana yang diizinkan oleh Otoritas
                Jasa Keuangan Republik Indonesia.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">url</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>Halaman situs pihak penyedia aplikasi.</p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">owner</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>
                Pihak pemilik aplikasi. Dapat berupa individu atau badan usaha
                resmi.
              </p>
            </li>
          </ul>
          <h4>Illegals</h4>
          <p>
            Illegals merupakan sebuah entitas yang merepresentasikan sebuah
            produk investasi yang telah dinyatakan ilegal beredar di Indonesia
            oleh Otoritas Jasa Keuangan Republik Indonesia.
          </p>
          <p>Berikut merupakan salah satu contoh dari entitas Illegals</p>
          <CodeBox lang="json">
            {endent`
              {
                "id": 1,
                "name": "Acme Inc.",
                "alias": [
                  "ACME"
                ],
                "address": "Jln. Merdeka Barat no. 2",
                "number": [
                  "08123456789"
                ],
                "email": [
                  "john.doe@acme.com"
                ],
                "urls": [
                  "http://acme.com"
                ],
                "type": "Investasi Saham",
                "inputDate": "18/08/2016",
                "details": ""
              },`}
          </CodeBox>
          <p>
            Illegals memiliki sepuluh properti yang masing-masing menyimpan
            informasi berikut.
          </p>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">id</span>
                <Badge.Green>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
              </p>
              <p>
                Nomor ID produk investasi ilegal sesuai data yang disimpan oleh
                Otoritas Jasa Keuangan Republik Indonesia.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">name</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>
                Nama produk investasi yang telah dinyatakan ilegal oleh Otoritas
                Jasa Keuangan Republik Indonesia.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">alias</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string array
                  </span>
                </Badge.Blue>
              </p>
              <p>
                Nama alternatif atau alias yang dapat mewakili atau
                merepresentasikan produk investasi terkait.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">address</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>Alamat pihak penyedia produk investasi ilegal.</p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">number</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string array
                  </span>
                </Badge.Blue>
              </p>
              <p>Nomor kontak yang digunakan oleh produk investasi ilegal.</p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">email</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string array
                  </span>
                </Badge.Blue>
              </p>
              <p>Alamat email yang digunakan oleh produk investasi ilegal.</p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">urls</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string array
                  </span>
                </Badge.Blue>
              </p>
              <p>Situs yang digunakan oleh produk investasi ilegal.</p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">type</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>
                Jenis aktivitas investasi yang ditawarkan oleh produk investasi
                ilegal.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">inputDate</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>
                Tanggal penambahan data produk investasi ilegal yang
                bersangkutan pada basis data Otoritas Jasa Keuangan Republik
                Indonesia. Disimpan dalam format <code>DD/MM/YYYY</code>.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">details</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>Informasi tambahan mengenai produk investasi ilegal.</p>
            </li>
          </ul>
          <h4>Products</h4>
          <p>
            Products merupakan entitas yang merepresentasikan sebuah produk
            reksa dana legal yang telah diizinkan oleh Otoritas Jasa Keuangan
            Republik Indonesia.
          </p>
          <p>Berikut merupakan salah satu contoh dari entitas Products.</p>
          <CodeBox lang="json">
            {endent`{
              "id": 1,
              "name": "Dana Obligasi ACME",
              "management": "Acme Inc.",
              "custodian": "Acme Inc.",
              "type": "Capital Protected Fund"
            }`}
          </CodeBox>
          <p>
            Products memiliki lima buah properti yang masing-masing menyimpan
            informasi-informasi berikut.
          </p>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">id</span>
                <Badge.Green>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
              </p>
              <p>
                Nomor ID produk reksa dana sesuai data yang disimpan oleh
                Otoritas Jasa Keuangan Republik Indonesia.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">name</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>
                Nama produk reksa dana yang diizinkan oleh Otoritas Jasa
                Keuangan Republik Indonesia.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">management</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>Pihak pengelola produk reksa dana.</p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">custodian</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>
                <a
                  href="https://id.wikipedia.org/wiki/Bank_kustodian"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Bank kustodian
                </a>{' '}
                dari produk reksa dana.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">type</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>Jenis produk reksa dana.</p>
            </li>
          </ul>

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
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">data</span>
                <Badge.Yellow>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    object
                  </span>
                </Badge.Yellow>
              </p>

              <p>
                Data dari hasil permintaan yang dikembalikan. Akan bernilai{' '}
                <code>null</code> apabila <code>error</code>
                tidak bernilai <code>null</code>.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">error</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
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
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">nama_entitas</span>
                <Badge.Yellow>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    object
                  </span>
                </Badge.Yellow>
              </p>
              <p>
                Entitas yang dicari. Dapat merupakan kumpulan entitas dalam
                bentuk <i>array</i> atau sebuah entitas tunggal.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">version</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>
                Tanggal pembaharuan data. Disimpan dalam format{' '}
                <code>DD/MM/YYYY</code>.
              </p>
            </li>
          </ul>
          <p>
            Seluruh <i>endpoint</i> yang mengembalikan banyak entitas sekaligus
            akan memiliki satu buah properti tambahan.
          </p>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">count</span>
                <Badge.Green>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
              </p>
              <p>Jumlah entitas yang memenuhi kriteria pencarian.</p>
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
                yang tidak diizinkan. Penyebab kesalahan ditunjukkan melalui
                properti <code>error</code>.
              </p>
            </li>
            <li>
              <strong>405</strong>
              <p>
                Permintaan dikirimkan menggunakan <i>method</i> HTTP yang tidak
                diizinkan. Seluruh <i>endpoint</i> dalam API <b>Piramida</b>{' '}
                hanya dapat dipanggil menggunakan <i>method</i> <code>GET</code>
                .
              </p>
            </li>
            <li>
              <strong>500</strong>
              <p>Terdapat kesalahan tidak terduga yang dialami oleh peladen.</p>
            </li>
          </ul>

          <h4>Apps</h4>
          <p>
            Kumpulan <i>endpoint</i> yang dapat digunakan untuk memperoleh
            informasi mengenai segala sesuatu yang berhubungan dengan Apps.
          </p>

          <h4>
            <span className="font-bold">GET</span> &mdash;{' '}
            <code>/api/apps</code>
          </h4>
          <p>
            Mengembalikan seluruh aplikasi manajemen investasi atau portal
            transaksi investasi yang telah dinyatakan legal oleh Otoritas Jasa
            Keuangan Republik Indonesia.
          </p>
          <b>Parameter Permintaan</b>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">name</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>Pola nama yang ingin dicari dari daftar aplikasi.</p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">limit</span>
                <Badge.Green>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
              </p>
              <p>Jumlah data maksimum yang dapat dikembalikan.</p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">offset</span>
                <Badge.Green>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
              </p>
              <p>Indeks pertama dari data yang diminta.</p>
            </li>
          </ul>
          <h4>
            <span className="font-bold">GET</span> &mdash;{' '}
            <code>/api/apps/:id</code>
          </h4>
          <p>
            Mengembalikan sebuah aplikasi manajemen reksa dana legal yang
            diizinkan oleh Otoritas Jasa Keuangan Republik Indonesia yang
            memiliki nomor ID yang sama dengan parameter <code>id</code>.
          </p>
          <b>Parameter Permintaan</b>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">id</span>
                <Badge.Green>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Green>
                <Badge.Red>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    required
                  </span>
                </Badge.Red>
              </p>
              <p>
                Nomor identitas dari aplikasi manajemen reksa dana yang
                diinginkan.
              </p>
            </li>
          </ul>

          <h3>Endpoint `illegals`</h3>
          <p>
            Kumpulan <i>endpoint</i> yang melayani seluruh permintaan mengenai
            produk investasi yang telah dinyatakan ilegal beredar di Indonesia
            oleh Otoritas Jasa Keuangan Republik Indonesia.
          </p>
          <p>Produk investasi ilegal memiliki bentuk data berikut:</p>

          <p>
            Berikut merupakan penjelasan dari setiap properti yang dimiliki oleh
            data aplikasi manajemen reksa dana.
          </p>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">id</span>
                <Badge.Green>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
              </p>
              <p>
                Nomor ID produk investasi ilegal sesuai data yang disimpan dalam
                data Otoritas Jasa Keuangan Republik Indonesia.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">name</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>
                Nama dari produk investasi yang telah dinyatakan illegal oleh
                Otoritas Jasa Keuangan Republik Indonesia.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">alias</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string array
                  </span>
                </Badge.Blue>
              </p>
              <p>
                Nama alternatif dari produk investasi yang telah dinyatakan
                illegal oleh Otoritas Jasa Keuangan Republik Indonesia.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">address</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>Alamat pihak penyedia produk investasi ilegal.</p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">number</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string array
                  </span>
                </Badge.Blue>
              </p>
              <p>
                Daftar nomor telepon pihak penyedia produk investasi ilegal.
              </p>
            </li>
          </ul>
          <h4>
            <span className="font-bold">GET</span> &mdash;{' '}
            <code>/api/apps</code>
          </h4>
          <p>
            Mengembalikan seluruh aplikasi manajemen investasi atau portal
            transaksi investasi yang telah dinyatakan legal oleh Otoritas Jasa
            Keuangan Republik Indonesia.
          </p>
          <b>Parameter Permintaan</b>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">name</span>
                <Badge.Blue>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>Pola nama yang ingin dicari dari daftar aplikasi.</p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">limit</span>
                <Badge.Green>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
              </p>
              <p>Jumlah data maksimum yang dapat dikembalikan.</p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">offset</span>
                <Badge.Green>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
              </p>
              <p>Indeks pertama dari data yang diminta.</p>
            </li>
          </ul>
          <h4>
            <span className="font-bold">GET</span> &mdash;{' '}
            <code>/api/apps/:id</code>
          </h4>
          <p>
            Mengembalikan sebuah aplikasi manajemen reksa dana legal yang
            diizinkan oleh Otoritas Jasa Keuangan Republik Indonesia yang
            memiliki nomor ID yang sama dengan parameter <code>id</code>.
          </p>
          <b>Parameter Permintaan</b>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">id</span>
                <Badge.Green>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Green>
                <Badge.Red>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    required
                  </span>
                </Badge.Red>
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
