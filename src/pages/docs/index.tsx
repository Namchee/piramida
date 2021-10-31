import * as React from 'react';

import Head from 'next/head';
import endent from 'endent';

import { CodeBox } from '@/components/elements/CodeBox';
import { Badge } from '@/components/elements/Badge';
import { useScrollSpy } from '@/hooks/useScrollSpy';

// Code highlighter shared state
export const CodeContext = React.createContext(undefined);

/**
 * API Documentation.
 *
 * @return {JSX.Element} API Documentation page
 */
function Docs(): JSX.Element {
  const [highlighter, setHighlighter] = React.useState(null);
  const value = { highlighter, setHighlighter };

  const anchors = React.useRef([]);

  React.useEffect(() => {
    anchors.current = [...document.querySelectorAll('[data-scrollspy]')];
  }, []);

  const currentHead = useScrollSpy(anchors.current);

  const getNavigationItemClass = (
    level: number,
    observing: string,
  ) => {
    const base = ['tracking-tight', 'text-lg', `ml-${4 * level}`];

    base.push(currentHead === observing ?
      'text-primary font-bold' :
      'text-gray-500',
    );

    return base.join(' ');
  };

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
        px-6
        md:px-12
        lg:px-0
        lg:space-x-32
        <md:py-8
        py-16"
      >
        <aside className="hidden lg:block px-8">
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
            <ul className="space-y-3">
              <li className={getNavigationItemClass(0, 'resource')}>
                <a href="#resource">
                  Resource
                </a>
              </li>
              <li className={getNavigationItemClass(1, 'apps')}>
                <a href="#apps">
                  Apps
                </a>
              </li>
              <li className={getNavigationItemClass(1, 'illegals')}>
                <a href="#illegals">
                  Illegals
                </a>
              </li>
              <li className={getNavigationItemClass(1, 'products')}>
                <a href="#products">
                  Products
                </a>
              </li>
              <li className={getNavigationItemClass(0, 'rest')}>
                <a href="#rest">
                  REST API
                </a>
              </li>
              <li className={getNavigationItemClass(1, 'rest-apps')}>
                <a href="#rest-apps">
                  Apps
                </a>
              </li>
              <li className={getNavigationItemClass(1, 'rest-illegals')}>
                <a href="#rest-illegals">
                  Illegals
                </a>
              </li>
              <li className={getNavigationItemClass(1, 'rest-products')}>
                <a href="#rest-products">
                  Products
                </a>
              </li>
              <li className={getNavigationItemClass(0, 'graphql')}>
                <a href="#graphql">
                  GraphQL API
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div
          className="flex-1
          lg:px-8
          max-w-full
          prose md:prose-xl
          text-gray-600"
        >
          <h1 className="text-gray-800 tracking-tight">Dokumentasi API</h1>
          <blockquote>
            Anda dapat melihat dokumentasi versi lama melalui
            tautan <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Namchee/ojk-invest-api/tree/master/docs">
                berikut
            </a>.
          </blockquote>

          <p>
            <b>Piramida</b> menyediakan layanan API HTTP publik yang dapat
            diakses melalui tautan{' '}
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

          <h2 id="resource" data-scrollspy>Resource</h2>
          <p>
            API <b>Piramida</b> menyediakan data yang bersumber dari
            Otoritas Jasa Keuangan Republik Indonesia dalam bentuk kumpulan{' '}
            <i>resource</i> yang dapat dipanggil sebagai <i>endpoint</i>{' '}
            HTTP.
          </p>
          <p>
            Terdapat tiga buah <i>resource</i> utama yang disediakan oleh
            API <b>Piramida</b>.
          </p>
          <h4 id="apps" data-scrollspy>Apps</h4>
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
                <Badge.Green label="Integer">
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
                <Badge.Blue label="String">
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
                <Badge.Blue label="String">
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
                <Badge.Blue label="String">
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
          <h4 id="illegals" data-scrollspy>Illegals</h4>
          <p>
            Illegals merupakan sebuah entitas yang merepresentasikan sebuah
            produk investasi yang telah dinyatakan ilegal oleh Otoritas Jasa
            Keuangan Republik Indonesia.
          </p>
          <p>Berikut merupakan salah satu contoh dari entitas Illegals.</p>
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
              }`}
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
                <Badge.Green label="Integer">
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
                <Badge.Blue label="String">
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
                <Badge.Blue label="Array of String">
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
                <Badge.Blue label="String">
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
                <Badge.Blue label="Array of String">
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
                <Badge.Blue label="Array of String">
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
                <Badge.Blue label="Array of String">
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
                <Badge.Blue label="String">
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
                <Badge.Blue label="String">
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
                <Badge.Blue label="String">
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>Informasi tambahan mengenai produk investasi ilegal.</p>
            </li>
          </ul>
          <h4 id="products" data-scrollspy>Products</h4>
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
                <Badge.Green label="Integer">
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
                <Badge.Blue label="String">
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
                <Badge.Blue label="String">
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
                <Badge.Blue label="String">
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
                <Badge.Blue label="String">
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>Jenis produk reksa dana.</p>
            </li>
          </ul>

          <h2 id="rest" data-scrollspy>REST API</h2>
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
                <Badge.Yellow label="Object">
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
                <Badge.Blue label="String">
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
                <span className="font-bold leading-relaxed">
                  &lt;resource&gt;
                </span>
                <Badge.Yellow label="Object">
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
                <Badge.Blue label="String">
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
                <Badge.Green label="Integer">
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
              <strong>404</strong>
              <p>
                Halaman atau <i>resource</i> yang Anda cari tidak dapat
                ditemukan pada API <b>Piramida</b>.
              </p>
            </li>
            <li>
              <strong>405</strong>
              <p>
                Permintaan dikirimkan menggunakan <i>method</i> HTTP yang tidak
                diizinkan. Seluruh <i>endpoint</i> dalam API{' '}
                <b>Piramida</b> hanya dapat dipanggil menggunakan{' '}
                <i>method</i> <code>GET</code>.
              </p>
            </li>
            <li>
              <strong>500</strong>
              <p>Terdapat kesalahan tidak terduga yang dialami oleh peladen.</p>
            </li>
          </ul>

          <h3 id="rest-apps" data-scrollspy>Apps</h3>
          <p>
            Kumpulan <i>endpoint</i> yang dapat digunakan untuk memperoleh
            informasi mengenai aplikasi managemen reksa dana yang diizinkan
            oleh Otoritas Jasa Keuangan Republik Indonesia.
          </p>

          <h4>GET &mdash; /api/apps</h4>
          <p>
            Mengembalikan seluruh aplikasi manajemen reksa dana yang telah
            dinyatakan legal oleh Otoritas Jasa Keuangan Republik Indonesia
            sesuai dengan parameter permintaan yang diberikan.
          </p>
          <b>Parameter Permintaan</b>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">name</span>
                <Badge.Blue label="String">
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
                <Badge.Green label="Integer">
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
                <Badge.Green label="Integer">
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
              </p>
              <p>Indeks pertama dari data yang diminta.</p>
            </li>
          </ul>
          <p>
            <b>Contoh penggunaan <i>endpoint</i></b>
          </p>
          <p>
            <b>Permintaan</b>
          </p>
          <pre>curl https://ojk-invest-api.vercel.app/api/apps</pre>
          <p>
            <b>Respon</b>
          </p>
          <CodeBox lang="json">
            {endent`
            {
              "data": {
                "apps": [
                  {
                    "id": 1,
                    "name": "ACME",
                    "url": "https://www.acme.com",
                    "owner": "Acme Inc."
                  }
                ],
                "count": 1,
                "version": "21/10/2021"
              },
              "error": ""
            }`}
          </CodeBox>
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
                <Badge.Green label="Integer">
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
                <Badge.Red label="Required">
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
          <p>
            <b>Contoh penggunaan <i>endpoint</i></b>
          </p>
          <p>
            <b>Permintaan</b>
          </p>
          <pre>curl https://ojk-invest-api.vercel.app/api/apps/1</pre>
          <p>
            <b>Respon</b>
          </p>
          <CodeBox lang="json">
            {endent`
            {
              "data": {
                "apps": {
                  "id": 1,
                  "name": "Ajaib",
                  "url": "https://www.ajaib.co.id",
                  "owner": "PT Takjub Teknologi Indonesia"
                },
                "version": "21/10/2021"
              },
              "error": ""
            }`}
          </CodeBox>

          <h3 id="rest-illegals" data-scrollspy>Endpoint `illegals`</h3>
          <p>
            Kumpulan <i>endpoint</i> yang melayani seluruh permintaan mengenai
            produk investasi yang telah dinyatakan ilegal beredar di Indonesia
            oleh Otoritas Jasa Keuangan Republik Indonesia.
          </p>
          <h4>
            <span className="font-bold">GET</span> &mdash;{' '}
            <code>/api/illegals</code>
          </h4>
          <p>
            Mengembalikan seluruh produk investasi yang telah
            dinyatakan ilegal beredar di Indonesia
            oleh Otoritas Jasa Keuangan Republik Indonesia sesuai
            dengan parameter permintaan yang diberikan.
          </p>
          <b>Parameter Permintaan</b>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">name</span>
                <Badge.Blue label="String">
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>
                Pola nama yang ingin dicari dari daftar produk investasi ilegal.
              </p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">limit</span>
                <Badge.Green label="Integer">
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
                <Badge.Green label="Integer">
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
              </p>
              <p>Indeks pertama dari data yang diminta.</p>
            </li>
          </ul>
          <p>
            <b>Contoh penggunaan <i>endpoint</i></b>
          </p>
          <p>
            <b>Permintaan</b>
          </p>
          <pre>curl https://ojk-invest-api.vercel.app/api/illegals</pre>
          <p>
            <b>Respon</b>
          </p>
          <CodeBox lang="json">
            {endent`
            {
              "data": {
                "illegals": [
                  {
                    "id": 1,
                    "name": "Acme Inc.",
                    "alias": [
                      "ACME",
                      "A.C.M.E"
                    ],
                    "address": "Jl. Peta no. 2",
                    "number": [
                      "08379670609"
                    ],
                    "email": [
                      "acme@company.co.id"
                    ],
                    "urls": [
                      "http://acme.com"
                    ],
                    "type": "Investasi Saham",
                    "inputDate": "18/08/2016",
                    "details": ""
                  }
                ],
                "count": 1,
                "version": "21/10/2021"
              },
              "error": ""
            }`}
          </CodeBox>
          <h4>
            <span className="font-bold">GET</span> &mdash;{' '}
            <code>/api/illegals/:id</code>
          </h4>
          <p>
            Mengembalikan sebuah produk investasi yang telah
            dinyatakan ilegal beredar di Indonesia
            oleh Otoritas Jasa Keuangan Republik Indonesia yang memiliki
            nomor ID yang sama dengan parameter <code>id</code>.
          </p>
          <b>Parameter Permintaan</b>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">id</span>
                <Badge.Green label="Integer">
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
                <Badge.Red label="Required">
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
          <p>
            <b>Contoh penggunaan <i>endpoint</i></b>
          </p>
          <p>
            <b>Permintaan</b>
          </p>
          <pre>curl https://ojk-invest-api.vercel.app/api/illegals/1</pre>
          <p>
            <b>Respon</b>
          </p>
          <CodeBox lang="json">
            {endent`
            {
              "data": {
                "illegals": {
                  "id": 1,
                  "name": "Acme Inc.",
                  "alias": [
                    "ACME",
                    "A.C.M.E"
                  ],
                  "address": "Jl. Peta no. 2",
                  "number": [
                    "08379670609"
                  ],
                  "email": [
                    "acme@company.co.id"
                  ],
                  "urls": [
                    "http://acme.com"
                  ],
                  "type": "Investasi Saham",
                  "inputDate": "18/08/2016",
                  "details": ""
                },
                "version": "21/10/2021"
              },
              "error": ""
            }`}
          </CodeBox>

          <h3 id="rest-products" data-scrollspy>Products</h3>
          <p>
            Kumpulan <i>endpoint</i> yang dapat digunakan untuk memperoleh
            informasi mengenai produk reksa dana legal yang telah diizinkan
            oleh Otoritas Jasa Keuangan Republik Indonesia.
          </p>

          <h4>GET &mdash; /api/products</h4>
          <p>
            Mengembalikan seluruh produk reksa dana legal yang telah
            diizinkan oleh Otoritas Jasa Keuangan Republik Indonesia
            sesuai dengan parameter permintaan yang diberikan.
          </p>
          <b>Parameter Permintaan</b>
          <ul>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">name</span>
                <Badge.Blue label="String">
                  <span className="text-xs font-bold tracking-wide uppercase">
                    string
                  </span>
                </Badge.Blue>
              </p>
              <p>Pola nama yang ingin dicari dari daftar produk investasi.</p>
            </li>
            <li>
              <p
                className="flex items-center
                space-x-3"
              >
                <span className="font-bold leading-relaxed">limit</span>
                <Badge.Green label="Integer">
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
                <Badge.Green label="Integer">
                  <span className="text-xs font-bold tracking-wide uppercase">
                    integer
                  </span>
                </Badge.Green>
              </p>
              <p>Indeks pertama dari data yang diminta.</p>
            </li>
          </ul>
          <p>
            <b>Contoh penggunaan <i>endpoint</i></b>
          </p>
          <p>
            <b>Permintaan</b>
          </p>
          <pre>curl https://ojk-invest-api.vercel.app/api/products</pre>
          <p>
            <b>Respon</b>
          </p>
          <CodeBox lang="json">
            {endent`
            {
              "data": {
                "products": [
                  {
                    "id": 1,
                    "name": "ACME",
                    "management": "Acme Inc.",
                    "custodian": "Acme Bank - Custody",
                    "type": "Mixed Asset Fund"
                  }
                ],
                "count": 1,
                "version": "21/10/2021"
              },
              "error": ""
            }`}
          </CodeBox>
          <h4>
            <span className="font-bold">GET</span> &mdash;{' '}
            <code>/api/products/:id</code>
          </h4>
          <p>
            Mengembalikan sebuah produk reksa dana legal yang telah
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
                <Badge.Green label="Integer">
                  <span className="text-xs font-bold tracking-wide uppercase">
                    id
                  </span>
                </Badge.Green>
                <Badge.Red label="Required">
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
          <p>
            <b>Contoh penggunaan <i>endpoint</i></b>
          </p>
          <p>
            <b>Permintaan</b>
          </p>
          <pre>curl https://ojk-invest-api.vercel.app/api/apps/1</pre>
          <p>
            <b>Respon</b>
          </p>
          <CodeBox lang="json">
            {endent`
            {
              "data": {
                "products": {
                  "id": 1,
                  "name": "ACME",
                  "management": "Acme Inc.",
                  "custodian": "Acme Bank - Custody",
                  "type": "Mixed Asset Fund"
                },
                "version": "21/10/2021"
              },
              "error": ""
            }`}
          </CodeBox>

          <h2 id="graphql" data-scrollspy>GraphQL API</h2>
          <p>
            Selain <b>REST API</b>, <b>Piramida</b> juga menyediakan
            sebuah API GraphQL yang dapat diakses melalui tautan{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ojk-invest-api.vercel.app/api/graphql">
              https://ojk-invest-api.vercel.app/api/graphql
            </a>.
          </p>
          <p>
            GraphQL merupakan sebuah <i>query language</i> alternatif
            dari REST. Keunggulan dari GraphQL dibandingkan REST API
            konvensional adalah pengguna dapat menentukan properti-properti
            mana saja yang dikembalikan dalam permintaan yang dikirim di mana
            hal tersebut dapat menyelesaikan masalah <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.howtographql.com/basics/1-graphql-is-the-better-rest/">
              <i>
                over-fetching
              </i>
              {' '}maupun{' '}
              <i>
                under-fetching
              </i>
            </a> serta menyediakan API yang lebih fleksibel.
          </p>
          <p>
            Informasi mengenai tata cara penggunaan API GraphQL dapat
            dilihat melalui <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://graphql.org/learn/">
                dokumentasi resmi GraphQL
            </a>.
          </p>
          <h4>
            Penggunaan API GraphQL Piramida
          </h4>
          <p>
            Seluruh <i>resource</i> yang disediakan oleh REST API juga
            tersedia melalui API GraphQL yang dapat dipanggil sebagai{' '}
            <i>query</i> GraphQL.
          </p>
          <p>
            Berikut merupakan sebuah contoh penggunaan API GraphQL{' '}
            <b>Piramida</b> untuk memperoleh data seluruh aplikasi
            reksa dana yang telah diizinkan oleh Otoritas Jasa Keuangan
            Republik Indonesia.
          </p>
          <pre>
            {endent`
            {
              apps {
                data {
                  name
                  owner
                }
                count
                version
              }
            }`}
          </pre>
          <p>
            Permintaan tersebut akan menghasilkan data seperti berikut.
          </p>
          <CodeBox lang="json">
            {
              endent`
              {
                "data": {
                  "apps": {
                    "data": [
                      {
                        "name": "ACME",
                        "owner": "Acme Inc."
                      }
                    ],
                    "count": 1,
                    "version": "21/10/2021"
                  }
                }
              }
              `
            }
          </CodeBox>
          <p>
            Untuk penggunaan lebih lanjut, Anda dapat mencoba
            menggunakan API GraphQL <b>Piramida</b> melalui sebuah
            antarmuka GraphQL <i>playground</i> yang dapat diakses melalui
            tautan <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ojk-invest-api.vercel.app/api/graphql">
              https://ojk-invest-api.vercel.app/api/graphql
            </a>.
          </p>
        </div>
      </article>
    </CodeContext.Provider>
  );
}

export default Docs;
