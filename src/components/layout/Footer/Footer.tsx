import * as React from 'react';

import { Flex, Box, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      w="100%">
      <Flex
        maxW="4xl"
        mx="auto"
        paddingX={2}
        paddingY={6}
        borderTopColor="gray.200"
        borderTopWidth={1}
        borderTopStyle="solid"
        fontSize="sm">
        Data diambil dari situs
        <Link
          href="https://ojk.go.id"
          isExternal
          marginLeft="0.5ch"
          color="primary"
        >
          Otoritas Jasa Keuangan Republik Indonesia.
        </Link>
      </Flex>
    </Box>
  );
}

export default Footer;
