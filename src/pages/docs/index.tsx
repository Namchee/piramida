import * as React from 'react';

import Head from 'next/head';

import { Container, Heading, Text } from '@chakra-ui/react';
import { ExternalLink } from '@/components/elements/ExternalLink';


function Docs() {
  return (
    <>
      <Head>
        <title>Dokumentasi API — Piramida</title>
      </Head>

      <Container
        minH="100%"
        paddingY={24}
        maxW="4xl"
        marginX="auto"
        textAlign="center">
        <Heading size="2xl" letterSpacing="tighter" lineHeight="taller" color="gray.800" mb={4}>
          Dalam Pembangunan
        </Heading>

        <Text fontSize="lg" color="gray.600" lineHeight="tall" mb={6} maxW="lg" marginX="auto">
          Mohon maaf, namun halaman dokumentasi API masih dalam tahap pembangunan.
          Untuk sementara, Anda dapat melihat dokumentasi melalui{' '}
          <ExternalLink
            href="https://github.com/Namchee/ojk-invest-api/tree/master/docs">
            halaman ini
          </ExternalLink>.
        </Text>
      </Container>
    </>
  );
}

export default Docs;
