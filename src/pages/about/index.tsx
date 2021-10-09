import * as React from 'react';

import Head from 'next/head';

import { Container, Heading, Text, Link } from '@chakra-ui/react';

// import { ExternalLink } from '@/components/elements/ExternalLink';
import { AboutBanner } from '@/components/elements/Image';

/**
 * About us page
 *
 * @return {JSX.Element} about us page
 */
function About(): JSX.Element {
  /*
  const cringe = <Container
  minH="100%"
  paddingY={16}
  marginX="auto"
  maxW="4xl">
  <img
    style={{
      display: 'block',
      margin: '4rem auto',
    }}
    title="Piramida — Periksa Legalitas Investasi"
    alt="Piramida"
    src="/images/banner.svg"
    width="full"
    height="auto" />

  <Container mt={24} maxW="2xl">
    <Heading size="xl" letterSpacing="tight" lineHeight="taller" color="gray.800" mb={6}>
      Tentang Piramida
    </Heading>

    <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
      Piramida merupakan sebuah proyek sumber terbuka yang menyediakan
      basis data mengenai daftar entitas investasi legal yang beredar
      di Indonesia. Data yang disajikan bersumber dari situs Otoritas
      Jasa Keuangan Republik Indonesia.
    </Text>

    <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
      Nama <Text fontWeight={600} as="span">piramida</Text> sendiri
      terinspirasi dari skema penipuan investasi terbesar di dunia bernama
      <Text as="span" fontStyle="italic"> pyramid scheme</Text> atau
      sering disebut dengan <Text fontWeight={600} as="span">skema ponzi</Text>
      , sebuah skema penipuan investasi besar-besaran yang terjadi pada tahun 1920-an.
    </Text>

    <Text fontSize="lg" color="gray.600" lineHeight="tall">
      Situs ini terinspirasi secara langsung dari situs serupa
      {' '}<ExternalLink
        href="https://pinjollist.vercel.app/">
        pinjollist
      </ExternalLink>.
    </Text>
  </Container>

  <Container mt={12} maxW="2xl">
    <Heading size="xl" letterSpacing="tight" lineHeight="taller" color="gray.800" mb={6}>
      Latar Belakang Piramida
    </Heading>

    <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
      Belakangan ini, kita sering mendengar mengenai kemunculan bisnis
      investasi menggiurkan yang menjanjikan keuntungan dengan jumlah
      yang banyak dengan usaha yang sedikit.
    </Text>

    <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
      Penawaran tersebut tentunya memicu gelombang antusiasme yang tinggi dari
      masyarakat, mengesampingkan faktor legalitas dan logika. Hal tersebut
      dapat kita lihat melalui banyaknya penawaran bisnis investasi yang ditawarkan
      melalui <ExternalLink
        href="https://www.liputan6.com/saham/read/4474437/marak-influencer-saham-di-media-sosial-ini-dampaknya">
          media sosial
      </ExternalLink> secara masif dan terstruktur.
    </Text>

    <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
      Tidak jarang bahwa kita seringkali menerima berita mengenai respon
      dari korban dari investasi bodong, mulai dari <ExternalLink
        href="https://www.kompas.tv/article/170193/ratusan-korban-investasi-bodong-212-mart-lapor-polisi-kerugian-capai-miliaran-rupiah">
          menyerahkan pada pihak berwajib
      </ExternalLink> sampai melakukan <ExternalLink
        href="https://news.okezone.com/read/2020/04/17/340/2200960/pedagang-elektronik-nekat-gantung-diri-diduga-tertipu-investasi-bodong">
          aksi bunuh diri
      </ExternalLink> yang mengundang rasa prihatin.
    </Text>

    <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
      Otoritas Jasa Keuangan (OJK) Republik Indonesia sebagai lembaga resmi yang
      bertanggung jawab dalam mengatur dan memantau layanan keuangan di Indonesia
      telah merilis dan mengelola daftar entitas investasi legal secara berkala baik
      melalui <ExternalLink href="https://www.ojk.go.id/en/default.aspx">situs resmi</ExternalLink> maupun
      melalui kontak WhatsApp OJK 157.
    </Text>

    <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
      Sayangnya, informasi tersebut sulit diakses melalui situs resmi dan
      terkesan terbatas pada pengguna aplikasi WhatsApp saja. Selain itu,
      format data yang sering berubah dan tidak konsisten dapat membingungkan
      para pencari informasi. Hal tersebut tentunya berdampak negatif
      pada daya guna informasi yang disajikan.
    </Text>

    <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
      Aksesabilitas informasi sangatlah penting sebagai salah satu
      upaya untuk membentuk masyarakat yang cerdas berinvestasi. Kami berharap
      bahwa situs ini dapat menjadi sebuah langkah untuk mengedukasi masyarakat
      mengenai dunia investasi yang setiap hari dapat mereka temukan.
    </Text>
  </Container>

  <Container mt={12} maxW="2xl">
    <Heading size="xl" letterSpacing="tight" lineHeight="taller" color="gray.800" mb={6}>
      Untuk Pengembang
    </Heading>

    <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
      Selain sebagai sarana edukasi pada masyarakat, kami merasa penting
      untuk mempermudah akses bagi para pengembang yang membutuhkan informasi
      pada layanan / aplikasi yang mereka buat. Itulah alasan kami untuk melakukan
      pengembangan lebih lanjut pada layanan ini agar dapat menyajikan data melalui
      sebuah <Link href="/api" color="primary.base">API publik</Link> yang
      dapat diakses oleh siapapun dan kapanpun.
    </Text>

    <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
      Kami juga percaya penuh pada semangat <Text as="span" fontStyle="italic">open source</Text> dan
      manfaat positif dari <Text as="span" fontStyle="italic">open source</Text> bagi layanan ini.
      Kami telah merilis <Text as="span" fontStyle="italic">source code</Text> dari
      layanan ini pada <ExternalLink href="https://github.com/Namchee/piramida">repositori kami</ExternalLink> yang
      disimpan di GitHub.
    </Text>
  </Container>
</Container>;
*/
  return (
    <>
      <Head>
        <title>Tentang Kami — Piramida</title>
      </Head>

      <div
        role="image"
        className="grid place-items-center
          flex-1
          mx-auto
          w-full
          min-h-64 max-h-72
          2xl:max-h-80">
        <AboutBanner className="w-32 h-auto" />
      </div>

      <article className="w-full
        flex-1
        max-w-prose
        mx-auto
        mb-12">
        <h1 className="text-4xl
          text-gray-700
          tracking-tight
          font-bold
          leading-relaxed
          mb-4">
          Tentang Piramida
        </h1>

        <p className="leading-relaxed text-gray-500 text-lg mb-4">
          <b>Piramida</b> merupakan sebuah proyek sumber terbuka yang
          menyediakan basis data yang menyimpan daftar entitas investasi
          legal yang beredar di Indonesia. Data yang disajikan
          oleh <b>piramida</b> diambil secara langsung dari situs
          Otoritas Jasa Keuangan Republik Indonesia.
        </p>

        <p className="leading-relaxed text-gray-500 text-lg mb-4">
          Nama <b>piramida</b> sendiri terinspirasi dari
          skema penipuan investasi terbesar di dunia yang lebih dikenal
          dengan nama <i>pyramid scheme</i> atau lebih dikenal
          sebagai <b>skema ponzi</b>, sebuah skema penipuan
          investasi yang terjadi pada tahun 1920-an.
        </p>

        <p className="leading-relaxed text-gray-500 text-lg mb-12">
          Situs ini terinspirasi secara langsung dari situs serupa
          bernama <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary
              transition-colors
              hover:text-primary-light"
            href="https://pinjollist.vercel.app/">
            pinjollist
          </a>.
        </p>

        <h2 className="text-4xl
          text-gray-700
          tracking-tight
          font-bold
          leading-relaxed
          mb-4">
          Latar Belakang Piramida
        </h2>

        <p className="leading-relaxed text-gray-500 text-lg mb-4">
          Belakangan ini, kita sering mendengar mengenai kemunculan bisnis
          investasi menggiurkan yang menjanjikan keuntungan dengan jumlah
          yang banyak dan konsisten dengan usaha dan modal yang sedikit.
        </p>

        <p className="leading-relaxed text-gray-500 text-lg mb-4">
          Penawaran semacam itu tentunya memicu gelombang antusiasme yang
          tinggi dari masyarakat dengan mengesampingkan faktor legalitas
          dan logika, khususnya ditengah terjangan pandemi. Hal tersebut
          dapat diamati melalui <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary
              transition-colors
              hover:text-primary-light"
            href="https://ekbis.sindonews.com/read/486862/178/warning-marak-investasi-bodong-palsukan-perusahaan-kenali-modusnya-1626664047">
              maraknya penawaran investasi bodong
          </a> yang semakin lihai menipu calon korbannya.
        </p>

        <p className="leading-relaxed text-gray-500 text-lg mb-4">
          Tidak jarang bahwa kita seringkali menerima berita dengan topik
          korban dari investasi bodong, mulai dari <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary
              transition-colors
              hover:text-primary-light"
            href="https://www.kompas.tv/article/170193/ratusan-korban-investasi-bodong-212-mart-lapor-polisi-kerugian-capai-miliaran-rupiah">
          menyerahkan pada pihak berwajib
          </a> sampai melakukan aksi yang memprihatinkan seperti <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary
              transition-colors
              hover:text-primary-light"
            href="https://news.okezone.com/read/2020/04/17/340/2200960/pedagang-elektronik-nekat-gantung-diri-diduga-tertipu-investasi-bodong">
              bunuh diri
          </a>.
        </p>

        <p className="leading-relaxed text-gray-500 text-lg mb-4">
          Otoritas Jasa Keuangan (OJK) Republik Indonesia sebagai lembaga
          resmi yang  bertanggung jawab dalam mengatur dan memantau layanan
          keuangan di Indonesia berupaya menanggulangi hal tersebut dengan
          merilis dan mengelola daftar entitas investasi legal secara
          berkala baik melalui <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary
              transition-colors
              hover:text-primary-light"
            href="https://www.ojk.go.id/en/default.aspx">
              situs resmi Otoritas Jasa Keuangan Republik Indonesia
          </a> maupun melalui kontak WhatsApp OJK 157.
        </p>

        <p className="leading-relaxed text-gray-500 text-lg mb-4">
          Sayangnya, informasi investasi legal tergolong cukup sulit untuk
          diakses melalui situs resmi dikarenakan cara penggunaan situs yang
          cukup membingungkan dan terkesan terbatas pada pengguna aplikasi
          WhatsApp saja. Selain itu, format data yang sering berubah dan tidak
          konsisten seiring berjalannya waktu dapat membingungkan
          para pencari informasi. Hal tersebut tentunya berdampak negatif
          pada daya guna informasi yang disajikan.
        </p>

        <p className="leading-relaxed text-gray-500 text-lg mb-4">
          Aksesibilitas informasi sangatlah penting sebagai salah satu
          upaya untuk membentuk masyarakat yang cerdas berinvestasi.
          Pengembang berharap bahwa situs ini dapat menjadi sebuah langkah
          konkrit untuk mengedukasi masyarakat mengenai dunia investasi
          yang semakin marak ditemui dalam kehidupan sehari-hari.
        </p>
      </article>
    </>
  );
}

export default About;
