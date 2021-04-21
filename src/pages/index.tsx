import * as React from 'react';

import Head from 'next/head';

import { Heading, Text, Container, Box } from '@chakra-ui/react';

import { SearchInvesment } from '@/components/modules/SearchInvestment';

function Home() {
  return (
    <>
      <Head>
        <title>Periksa Legalitas Investasi — Piramida</title>
      </Head>

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
            fontSize="xl"
            textAlign="center"
            color="gray.500">
            Periksa legalitas produk investasi pilihan Anda
          </Text>
        </Box>

        <SearchInvesment />
      </Container>
    </>
  );
}

export default Home;
