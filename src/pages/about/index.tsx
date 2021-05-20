import * as React from 'react';

import Head from 'next/head';

import { Container, Flex, Heading, Text, Link, LinkProps } from '@chakra-ui/react';

const OutLink = (props: LinkProps) => {
  return (
    <Link
      color="primary.base"
      isExternal
      {...props}>
      {props.children}
    </Link>
  );
};

function About() {
  return (
    <>
      <Head>
        <title>Tentang Piramida — Piramida</title>
      </Head>

      <Container
        minH="100%"
        paddingY={16}
        marginX="auto"
        maxW="4xl">
        <img
          style={{
            display: 'block',
            margin: '2rem auto',
          }}
          title="Piramida — Periksa Legalitas Investasi"
          alt="Piramida"
          src="/images/banner.svg"
          width="full"
          height="auto" />

        <Container mt={24}>
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
            <Text display="inline" as="span" fontStyle="italic"> pyramid scheme</Text> atau
            sering disebut dengan <Text fontWeight={600} as="span">skema ponzi</Text>
            , sebuah skema penipuan investasi yang populer pada tahun 1920-an.
          </Text>

          <Text fontSize="lg" color="gray.600" lineHeight="tall">
            Situs ini terinspirasi secara langsung dari situs serupa <OutLink
              href="https://pinjollist.vercel.app/">
              pinjollist
            </OutLink>.
          </Text>
        </Container>

        <Container mt={12}>
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
            melalui <OutLink
              href="https://www.liputan6.com/saham/read/4474437/marak-influencer-saham-di-media-sosial-ini-dampaknya">
                media sosial
            </OutLink> secara masif dan terstruktur.
          </Text>

          <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
            Tidak jarang bahwa kita seringkali menerima berita mengenai respon
            dari korban dari investasi bodong, mulai dari <OutLink
              href="https://www.kompas.tv/article/170193/ratusan-korban-investasi-bodong-212-mart-lapor-polisi-kerugian-capai-miliaran-rupiah">
                menyerahkan pada pihak berwajib
            </OutLink> sampai melakukan <OutLink
              href="https://news.okezone.com/read/2020/04/17/340/2200960/pedagang-elektronik-nekat-gantung-diri-diduga-tertipu-investasi-bodong">
                aksi bunuh diri
            </OutLink> yang mengundang rasa prihatin masyarakat.
          </Text>

          <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
            Otoritas Jasa Keuangan (OJK) Republik Indonesia sebagai lembaga resmi yang
            bertanggung jawab dalam mengatur dan memantau layanan keuangan di Indonesia
            telah merilis dan mengelola daftar entitas investasi legal secara berkala baik
            melalui <OutLink href="https://www.ojk.go.id/en/default.aspx">situs resmi</OutLink> maupun
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

        <Container mt={12}>
          <Heading size="xl" letterSpacing="tight" lineHeight="taller" color="gray.800" mb={6}>
            Untuk Pengembang
          </Heading>

          <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
            Selain sebagai sarana edukasi pada masyarakat, kami merasa penting
            untuk mempermudah akses bagi para pengembang yang membutuhkan informasi
            pada layanan / aplikasi yang mereka buat. Itulah alasan kami untuk melakukan
            pengembangan lebih lanjut pada layanan ini agar dapat menyajikan data melalui
            sebuah <Link href="/api" color="primary.base">API publik</Link> yang
            dapat diakses oleh siapapun.
          </Text>

          <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6}>
            Kami juga percaya penuh pada semangat <Text as="span" fontStyle="italic">open source</Text> dan
            manfaat positif dari <Text as="span" fontStyle="italic">open source</Text> bagi layanan ini.
            Kami telah merilis <Text as="span" fontStyle="italic">source code</Text> dari
            layanan ini pada <OutLink href="https://github.com/Namchee/piramida">repositori kami</OutLink> yang
            disimpan di GitHub.
          </Text>
        </Container>
      </Container>
    </>
  );
}

export default About;
