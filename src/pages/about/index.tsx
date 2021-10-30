import * as React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { AboutBanner } from '@/components/elements/Image';

// eslint-disable-next-line max-len
const metaDesc = `Piramida merupakan sebuah situs sumber terbuka yang menyediakan basis data yang menyimpan daftar entitas investasi legal yang beredar di Indonesia.`;

/**
 * About us page
 *
 * @return {JSX.Element} about us page
 */
function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>Tentang Kami — Piramida</title>
        <meta name="description" content={metaDesc}></meta>
        <meta property="og:title" content="Tentang Piramida"></meta>
        <meta property="og:url" content="https://piramida.vercel.app/about"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:description" content={metaDesc}></meta>
      </Head>

      <div
        role="image"
        className="grid place-items-center
          flex-1
          mx-auto
          w-full
          min-h-64 max-h-72
          2xl:max-h-80">
        <AboutBanner className="w-28 md:w-32 h-auto" />
      </div>

      <article className="prose
        md:prose-xl
        mx-auto
        px-6
        md:px-12
        mb-12
        text-gray-600">
        <h1 className="text-gray-800 font-bold text-center tracking-tight">
          Tentang Piramida
        </h1>

        <p>
          <b>Piramida</b> merupakan sebuah situs sumber terbuka yang
          menyediakan basis data yang menyimpan daftar entitas investasi
          legal yang beredar di Indonesia. Data yang disajikan
          oleh <b>piramida</b> diambil secara langsung dari situs
          Otoritas Jasa Keuangan Republik Indonesia.
        </p>

        <p>
          Nama <b>piramida</b> sendiri terinspirasi dari
          skema penipuan investasi terbesar di dunia yang lebih dikenal
          dengan nama <i>pyramid scheme</i> atau lebih dikenal
          sebagai <b>skema ponzi</b>, sebuah skema penipuan
          investasi besar yang terjadi pada tahun 1920-an.
        </p>

        <h2 className="text-gray-800 font-bold">
          Latar Belakang
        </h2>

        <p>
          Belakangan ini, kita sering mendengar mengenai kemunculan bisnis
          investasi menggiurkan yang menjanjikan keuntungan dengan jumlah
          yang banyak dan konsisten dengan usaha dan modal yang sedikit.
        </p>

        <p>
          Penawaran semacam itu tentunya memicu gelombang antusiasme yang
          tinggi dari masyarakat dengan mengesampingkan faktor legalitas
          dan logika, khususnya ditengah terjangan pandemi. Hal tersebut
          dapat diamati melalui <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ekbis.sindonews.com/read/486862/178/warning-marak-investasi-bodong-palsukan-perusahaan-kenali-modusnya-1626664047">
              maraknya penawaran investasi bodong
          </a> yang semakin lihai menipu calon korbannya.
        </p>

        <p>
          Tidak jarang bahwa kita seringkali menerima berita dengan topik
          korban dari investasi bodong, mulai dari pasrah dan <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.kompas.tv/article/170193/ratusan-korban-investasi-bodong-212-mart-lapor-polisi-kerugian-capai-miliaran-rupiah">
          menyerahkan pada pihak berwajib
          </a> sampai melakukan aksi yang memprihatinkan seperti <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://news.okezone.com/read/2020/04/17/340/2200960/pedagang-elektronik-nekat-gantung-diri-diduga-tertipu-investasi-bodong">
              bunuh diri
          </a>.
        </p>

        <p>
          Otoritas Jasa Keuangan (OJK) Republik Indonesia sebagai lembaga
          resmi yang  bertanggung jawab dalam mengatur dan memantau layanan
          keuangan di Indonesia berupaya menanggulangi hal tersebut dengan
          merilis dan mengelola daftar entitas investasi legal secara
          berkala melalui <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.ojk.go.id/">
              situs resmi Otoritas Jasa Keuangan Republik Indonesia
          </a> dan kontak <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://kontak157.ojk.go.id/">
              OJK 157
          </a>.
        </p>

        <p>
          Sayangnya, informasi tersebut tergolong cukup sulit untuk
          diakses melalui situs resmi dikarenakan cara penggunaan situs yang
          membingungkan. Selain itu, format data yang sering berubah dan tidak
          konsisten seiring berjalannya waktu dapat membingungkan
          para pencari informasi. Hal tersebut tentunya berdampak negatif
          pada daya guna informasi yang disajikan.
        </p>

        <p>
          Aksesibilitas informasi sangatlah penting sebagai salah satu
          upaya untuk membentuk masyarakat yang cerdas dalam mengelola
          uang. Pengembang berharap bahwa situs ini dapat menjadi sebuah langkah
          konkrit untuk mengedukasi masyarakat mengenai dunia investasi
          yang semakin marak ditemui dalam kehidupan sehari-hari.
        </p>

        <h2 className="text-gray-800 font-bold">
          Kebijakan Sumber Terbuka
        </h2>

        <p>
          Pengembang percaya sepenuhnya terhadap semangat dan manfaat yang
          dibawa oleh prinsip <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://id.wikipedia.org/wiki/Sumber_terbuka">
            sumber terbuka
          </a>. Untuk mendukung prinsip tersebut, seluruh kode sumber
          dari <b>piramida</b> tersedia seluruhnya secara publik dan
          dapat diakses melalui <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Namchee/piramida">
            repositori GitHub
          </a>.
        </p>

        <p>
          Selain itu, seluruh data investasi legal yang digunakan
          oleh <b>piramida</b> dapat diakses melalui
          sebuah <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ojk-invest-api.vercel.app/api">
            API publik
          </a>. Dokumentasi dari API tersebut dapat dilihat melalui
          tautan <Link passHref={true}
            href="/docs">
            <a>
              referensi API
            </a>
          </Link>.
        </p>
      </article>
    </>
  );
}

export default About;
