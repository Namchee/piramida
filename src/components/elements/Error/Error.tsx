import * as React from 'react';

import { Flex, IconButton } from '@chakra-ui/react';

import CloseIcon from './CloseIcon';

export type ErrorProps = {
  marginTop?: number;
  dismissable?: boolean;
}

function Error({ children, dismissable, marginTop }: React.PropsWithChildren<ErrorProps>) {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      marginTop={marginTop}
      p={4}
      borderLeftWidth={4}
      borderLeftColor="red.700"
      color="red.700"
      backgroundColor="red.100">
      {children}
      {
        dismissable &&
        <IconButton
          aria-label="Close Alert"
          backgroundColor="transparent"
          w={6}
          h={6}
          minW={0}
          borderRadius="full"
          onClick={() => setIsVisible(false)}
          _hover={{
            backgroundColor: 'red.200',
          }}
          icon={<CloseIcon w={4} h={4} stroke="red.700" />}>
        </IconButton>
      }
    </Flex>
  );
}

export default Error;
