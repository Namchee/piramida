import * as React from 'react';

import Image from 'next/image';

import { Text, Flex, Heading, VStack } from '@chakra-ui/react';


function EmptyResult() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      p={8}
      textAlign="center">
      <Image
        src="/images/empty-result.svg"
        width="full"
        height="full"
      />

      <Heading
        mt={4}
        color="gray.500"
        fontWeight={500}
        letterSpacing="tight"
        lineHeight="taller"
        fontSize="2xl">
        Investasi Tidak Ditemukan
      </Heading>

      <VStack
        maxW="sm"
        color="gray.400"
        spacing={8}>
        <Text>
          Entitas investasi yang Anda cari tidak dapat ditemukan
          dalam basis data Otoritas Jasa Keuangan Republik Indonesia.
        </Text>

        <Text>
          Anda disarankan untuk tidak melakukan transaksi apapun
          dengan entitas investasi ini.
        </Text>
      </VStack>
    </Flex>
  );
}

export default EmptyResult;
