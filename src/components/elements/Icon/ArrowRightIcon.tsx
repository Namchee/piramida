import * as React from 'react';

import { Icon, IconProps } from '@chakra-ui/react';

function ArrowRightIcon(props: IconProps) {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </Icon>
  );
}

export default ArrowRightIcon;
