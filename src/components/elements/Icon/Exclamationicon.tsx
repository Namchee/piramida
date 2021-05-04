import * as React from 'react';

import { Icon, IconProps } from '@chakra-ui/react';

function ExclamationIcon(props: IconProps) {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </Icon>
  );
}

export default ExclamationIcon;
