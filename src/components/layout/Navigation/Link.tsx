import * as React from 'react';

import { useRouter } from 'next/router';

import { Link as ChakraLink } from '@chakra-ui/react';

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
      p={4}
      color={isCurrentPath ? 'primary' : 'gray.500'}
      fontFamily='Inter'
      fontWeight={isCurrentPath ? 500 : 400}
      _hover={{
        color: isCurrentPath ? 'primary' : 'black',
      }}>
      {text}
    </ChakraLink>
  );
}

export default Link;
