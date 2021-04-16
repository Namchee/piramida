import * as React from 'react';

import { Flex, Text } from '@chakra-ui/react';

function EmptySuggestion(): JSX.Element {
  return (
    <Flex
      cursor="not-allowed"
      flexDir="column"
      alignItems="center"
      p={8}>
      <Text
        color="gray.400"
        lineHeight="taller"
        fontWeight={400}
        fontSize="4xl">
        ¯\_(ツ)_/¯
      </Text>
      <Text color="gray.400">
        Tidak ada data
      </Text>
    </Flex>
  );
}

export default EmptySuggestion;
