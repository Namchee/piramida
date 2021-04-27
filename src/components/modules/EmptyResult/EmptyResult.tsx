import * as React from 'react';

import Image from 'next/image';

import { Text, Flex, Heading } from '@chakra-ui/react';

function EmptyResult() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexFlow="column"
      mt={8}
      textAlign="center">
      <Image
        src="/images/empty-result.svg"
        alt="Investasi tidak ditemukan"
        width="full"
        height="full" />

      <Heading
        mt={4}
        color="gray.500"
        fontWeight={500}
        letterSpacing="tight"
        lineHeight="taller"
        fontSize="2xl">
        Investasi Tidak Ditemukan
      </Heading>

      <Text
        maxW="sm"
        color="gray.400">
        Produk investasi yang Anda cari tidak dapat kami temukan
        dalam basis data kami.
      </Text>
    </Flex>
  );
}

export default EmptyResult;
