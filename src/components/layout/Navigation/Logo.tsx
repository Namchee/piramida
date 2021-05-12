import * as React from 'react';

import { Icon, IconProps } from '@chakra-ui/react';

/**
 * Logo for header. Just a simple SVG.
 *
 * @param {IconProps} props - Chakra UI icon props.
 * @return {JSX.Element} - a function component.
 */
function Logo(props: IconProps): JSX.Element {
  return (
    <Icon
      viewBox="0 0 82 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="M40.7832 0L54.7365 24.1678H26.8299L40.7832 0Z" fill="#121212" />
      <path d="M16.1592 46.8357L23.5346 33.7238H58.0318L65.4073 46.8357H16.1592Z" stroke="#121212" strokeWidth="4" />
      <path d="M1.68888 71L9.15155 57.3916H72.4149L79.8775 71H1.68888Z" stroke="#121212" strokeWidth="3" />
    </Icon>
  );
}

export default Logo;
