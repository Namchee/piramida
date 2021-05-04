import * as React from 'react';

import { Text, Flex, Heading, VStack } from '@chakra-ui/react';

import { ExclamationIcon } from '@/components/elements/Icon';

function EmptyResult() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt={8}
      p={8}
      backgroundColor="red.100"
      borderRadius="md"
      textAlign="center">
      <ExclamationIcon stroke="red.700" fill="transparent" w={20} h={20} />
      <Heading
        mt={4}
        color="red.700"
        fontWeight={500}
        letterSpacing="tight"
        lineHeight="taller"
        fontSize="2xl">
        Investasi Tidak Ditemukan
      </Heading>

      <VStack
        spacing="16px">
        <Text
          maxW="xs"
          color="red.700"
          fontSize="sm">
          Produk investasi yang Anda cari tidak dapat ditemukan
          dalam basis data Otoritas Jasa Keuangan Republik Indonesia.
        </Text>

        <Text
          maxW="xs"
          color="red.700"
          fontSize="sm">
          Otoritas Jasa Keuangan tidak bisa menjamin legalitas
          dari produk investasi yang Anda cari.
        </Text>
      </VStack>

    </Flex>
  );
}

export default EmptyResult;
