import * as React from 'react';

import { Link } from '@chakra-ui/react';
import { Flex, Box } from '@chakra-ui/layout';

import PiramidaLink from './Link';
import Logo from './Logo';

import { LINKS } from '@/constants/nav';

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
          px={8}>
          <Logo />
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
