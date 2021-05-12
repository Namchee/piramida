import * as React from 'react';

import { Link } from '@chakra-ui/react';
import { Flex, Box } from '@chakra-ui/layout';

import PiramidaLink from './Link';
import Logo from './Logo';

const LINKS = [
  {
    name: 'Beranda',
    href: '/',
  },
  {
    name: 'Tentang',
    href: '/about',
  },
  {
    name: 'Referensi API',
    href: '/api',
  },
];

/**
 * Navigation Bar Component
 *
 * @return {JSX.Element}
 */
function Navbar(): JSX.Element {
  return (
    <Box
      w="100%"
      h="20"
      borderBottomWidth={1}
      borderBottomColor="gray.200">
      <Flex
        h="100%"
        as="nav"
        maxW="6xl"
        marginX="auto"
        justifyContent="flex-start"
        alignItems="center">
        <Link
          href="/"
          display="grid"
          placeItems="center"
          h="full"
          mr={2}
          px={6}>
          <Logo w={12} h="auto" />
        </Link>
        {
          LINKS.map(({ name, href }) => {
            return (
              <PiramidaLink
                key={href}
                text={name}
                href={href} />
            );
          })
        }
      </Flex>
    </Box>
  );
}

export default Navbar;
