import * as React from 'react';

import Head from 'next/head';

import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import { Dialog } from '@/components/elements/Dialog';
import { ExternalLink } from '@/components/elements/ExternalLink';
import { JSONBox } from '@/components/elements/JSONBox';

const responseFormat = `{ 
  "data": {
    "<nama_entitas>": { ... },
    "version": "..."
  },
  "error": "..."
}`;

function Api() {
  return (
    <>
      <Head>
        <title>Referensi API — Piramida</title>
      </Head>

      <Container
        minH="full"
        maxW="5xl"
        paddingY={16}
        width="full">
        <Flex h="full">
          <Box as="nav" py={8} px={4} display="inline-block" position="sticky" top={4} maxHeight="sm">
            <Text fontSize="sm" fontWeight={600} color="gray.500" textTransform="uppercase">
              Daftar Isi
            </Text>
          </Box>
          <Container flex={1} p={8} maxW="2xl">
            <Box w="full">
              <Heading letterSpacing="tight" lineHeight="taller">
                Dokumentasi API
              </Heading>

              <Dialog theme="gray">
                <Text>
                  Untuk sementara, API hanya dapat diakses melalui <ExternalLink href="https://ojk-invest-api.vercel.app/">tautan berikut</ExternalLink>
                </Text>
              </Dialog>

              <Text mt={6} mb={6} color="gray.600" lineHeight="tall">
                Piramida menyediakan API dalam bentuk <ExternalLink href="https://en.wikipedia.org/wiki/Representational_state_transfer">REST API</ExternalLink> yang menerima masukan dalam bentuk
                {' '}<Text as="span" fontStyle="italic">query string</Text> dan mengembalikan
                hasil dalam bentuk <ExternalLink href="https://www.json.org/json-en.html">JSON</ExternalLink>. Permintaan dan respon
                dari API didesain dengan mengacu pada penggunaan verba dan respon kode HTTP yang umum digunakan.
              </Text>

              <Text color="gray.600" lineHeight="tall">
                Respon dari API akan disimpan dalam <Text as="span" fontStyle="italic">cache</Text> publik
                agar data dapat disajikan dengan cepat. <Text as="span" fontStyle="italic">Cache</Text> tersebut
                memiliki <Text as="span" fontStyle="italic">lifetime</Text> selama 1 x 24 jam.
              </Text>
            </Box>

            <Box mt={8}>
              <Heading letterSpacing="tight" lineHeight="taller">
                Bentuk Respon
              </Heading>

              <Text mt={6} mb={6} color="gray.600" lineHeight="tall">
                Respon dari API memiliki bentuk kembalian standar seperti berikut
              </Text>

              <JSONBox>
                {responseFormat}
              </JSONBox>
            </Box>
          </Container>


        </Flex>
      </Container>
    </>
  );
}

export default Api;
