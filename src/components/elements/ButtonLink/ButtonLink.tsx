import * as React from 'react';

import { Box, Link } from '@chakra-ui/react';
import { ArrowRightIcon } from '../Icon';

export type ButtonLinkProps = {
  to: string;
};

function ButtonLink({ to, children }: React.PropsWithChildren<ButtonLinkProps>) {
  return (
    <Link
      w="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      href={to}
      py={4}
      px={6}
      backgroundColor="transparent"
      rounded="md"
      h="unset"
      role="group"
      isExternal
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
      <Box>
        {children}
      </Box>
      <Box>
        <ArrowRightIcon
          _groupHover={{
            textColor: 'gray.400',
          }}
          _groupActive={{
            textColor: 'gray.400',
          }}
          _groupFocus={{
            textColor: 'gray.400',
          }}
          textColor="transparent"
          w={4}
          h={4} />
      </Box>
    </Link>
  );
}

export default ButtonLink;