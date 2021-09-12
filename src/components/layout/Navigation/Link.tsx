import * as React from 'react';

import { useRouter } from 'next/router';

import { Link as ChakraLink, Text } from '@chakra-ui/react';

type NavigationLinkProps = {
  href: string;
}

function NavigationLink({ children, href }: React.PropsWithChildren<NavigationLinkProps>): JSX.Element {
  const { pathname } = useRouter();
  const isCurrentPath = pathname === href;

  const classes = React.useMemo((): string => {
    const color = isCurrentPath ? 'text-primary' : 'text-black';

    return `flex items-center justify-center ${color} px-4 py-2`;
  }, [href]);

  return (
    <a
      href={href}
      className={classes}
    >
      {children}
    </a>
  );

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

export default NavigationLink;
