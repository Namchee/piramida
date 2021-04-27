import * as React from 'react';

import { Flex, IconButton } from '@chakra-ui/react';

import { CloseIcon } from '@/components/elements/Icon';

export type DialogProps = {
  theme?: string;
  marginTop?: number;
  dismissable?: boolean;
}

function Dialog(
  { theme, children, dismissable, marginTop }: React.PropsWithChildren<DialogProps>,
) {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <Flex
      rounded="md"
      justifyContent="space-between"
      alignItems="center"
      marginTop={marginTop}
      p={4}
      backgroundColor={theme ? `${theme}.100` : 'transparent'}>
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
            backgroundColor: theme ? `${theme}.200` : 'transparent',
          }}
          icon={<CloseIcon w={4} h={4} stroke={theme ? `${theme}.700` : 'transparent'} />}>
        </IconButton>
      }
    </Flex>
  );
}

export default Dialog;
