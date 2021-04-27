import * as React from 'react';

import { Flex } from '@chakra-ui/react';

export type BadgeProps = {
  rounded?: boolean;
  background?: string;
};

function Badge(
  { rounded, background, children }: React.PropsWithChildren<BadgeProps>,
) {
  return (
    <Flex
      minW={16}
      p={1}
      rounded={rounded ? 'md' : 'none'}
      backgroundColor={background}
      alignItems="center"
      justifyContent="center">
      {children}
    </Flex>
  );
}

export default Badge;
