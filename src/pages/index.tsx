import * as React from 'react';

import Head from 'next/head';

import { Heading, Text, Container, Box } from '@chakra-ui/react';

import { Navigation } from '@/components/layout/Navigation';
import { SearchInput } from '@/components/modules/SearchInput';

function Home() {
  return (
    <>
      <Head>
        <title>Periksa Legalitas Invetasi — Piramida</title>
      </Head>
      <Navigation />

      <Container
        minH="100%"
        paddingY={16}
        maxW="4xl"
        marginX="auto">
        <Box mb={16}>
          <Heading
            textAlign="center"
            fontWeight={700}
            letterSpacing={-1.5}
            lineHeight={1.65}
            size="4xl">
            Profit atau Ponzi?
          </Heading>
          <Text
            fontFamily="Inter"
            fontSize="xl"
            textAlign="center"
            color="gray.500">
            Periksa legalitas produk investasi pilihan Anda
          </Text>
        </Box>

        <Box
          paddingX={36}>
          <SearchInput />
        </Box>
      </Container>
    </>
  );
}

export default Home;
