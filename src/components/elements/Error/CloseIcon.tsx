import * as React from 'react';

import { Icon, IconProps } from '@chakra-ui/react';

function CloseIcon(props: React.PropsWithoutRef<IconProps>) {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </Icon>
  );
}

export default CloseIcon;
