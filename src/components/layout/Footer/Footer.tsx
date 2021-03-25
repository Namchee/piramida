import * as React from 'react';

import { Flex, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex
      as="footer"
      maxW="3xl"
      marginX="auto"
      paddingX={2}
      paddingY={8}
      borderTopColor="gray.200"
      borderTopWidth={1}
      borderTopStyle="solid"
      fontSize="sm">
      Data diambil dari situs
      <Link
        href="https://ojk.go.id"
        isExternal
        marginLeft="0.5ch"
        color="primary">
        Otoritas Jasa Keuangan Republik Indonesia.
      </Link>
    </Flex>
  );
}

export default Footer;
