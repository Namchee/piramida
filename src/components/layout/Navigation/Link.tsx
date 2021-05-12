import * as React from 'react';

import { useRouter } from 'next/router';

import { Link as ChakraLink, Text } from '@chakra-ui/react';

type LinkProps = {
  text: string;
  href: string;
}

function Link({ text, href }: React.PropsWithoutRef<LinkProps>): JSX.Element {
  const { pathname } = useRouter();
  const isCurrentPath = pathname === href;

  return (
    <ChakraLink
      href={href}
      h="full"
      display="grid"
      placeItems="center"
      p={4}
      color={isCurrentPath ? 'primary.base' : 'gray.500'}
      fontWeight={isCurrentPath ? 500 : 400}
      _hover={{
        color: isCurrentPath ? 'primary.base' : 'black',
      }}>
      <Text>
        {text}
      </Text>
    </ChakraLink>
  );
}

export default Link;
