import * as React from 'react';

import Image from 'next/image';

import { Text, Flex, Heading, Box } from '@chakra-ui/react';

import { Dialog } from '@/components/elements/Dialog';
import { WarningIcon } from '@/components/elements/Icon';

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
        Produk investasi yang Anda cari tidak dapat ditemukan
        dalam basis data Otoritas Jasa Keuangan Republik Indonesia.
      </Text>

      <Dialog
        theme="yellow"
        marginTop={12}>
        <Flex alignItems="flex-start" p={2}>
          <Box p={2}>
            <WarningIcon
              strokeWidth={1}
              w={8}
              h={8}
              stroke="yellow.700" />
          </Box>

          <Box
            maxW="xs"
            ml={3}
            textAlign="left">
            <Heading
              lineHeight="tall"
              fontWeight={600}
              letterSpacing="tight"
              fontSize="lg"
              color="yellow.700">
              Hati-hati
            </Heading>
            <Text
              mb={4}
              fontSize="sm"
              color="yellow.700">
              Legalitas entitas investasi yang Anda cari belum dijamin oleh Otoritas Jasa Keuangan.
            </Text>

            <Text
              fontSize="sm"
              color="yellow.700">
              Anda sebaiknya tidak melakukan transaksi apapun dengan entitas investasi ini.
            </Text>
          </Box>
        </Flex>
      </Dialog>
    </Flex>
  );
}

export default EmptyResult;
