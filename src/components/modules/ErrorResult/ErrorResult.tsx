import * as React from 'react';

import Image from 'next/image';

import { Text, Flex, Heading } from '@chakra-ui/react';

function ErrorResult() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      p={8}
      textAlign="center">
      <Image
        src="/images/error-result.svg"
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
        Kesalahan Sistem
      </Heading>

      <Text
        maxW="sm"
        textColor="gray.400">
        Terdapat kesalahan pada sistem. Silahkan coba lagi
        dalam beberapa menit.
      </Text>
    </Flex>
  );
}

export default ErrorResult;
