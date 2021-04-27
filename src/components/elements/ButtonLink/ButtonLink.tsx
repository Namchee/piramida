import * as React from 'react';

import { Link } from '@chakra-ui/react';

export type ButtonLinkProps = {
  to: string;
};

function ButtonLink({ to, children }: React.PropsWithChildren<ButtonLinkProps>) {
  return (
    <Link
      w="full"
      href={to}
      display="flex"
      alignItems="center"
      p={4}
      backgroundColor="transparent"
      rounded="md"
      h="unset"
      _hover={{
        backgroundColor: 'gray.50',
      }}
      _active={{
        outline: 'none',
      }}
      _focus={{
        outline: 'none',
        backgroundColor: 'gray.50',
      }}>
      {children}
    </Link>
  );
}

export default ButtonLink;
