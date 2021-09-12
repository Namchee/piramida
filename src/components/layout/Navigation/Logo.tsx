import * as React from 'react';

import { IconProps } from '@/components/elements/Icon';

/**
 * Logo for header. Just a simple SVG.
 *
 * @param {IconProps} props - Chakra UI icon props.
 * @return {JSX.Element} - a function component.
 */
function Logo({ className }: React.PropsWithoutRef<IconProps>): JSX.Element {
  return (
    <svg className={className} viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="96" cy="96" r="96" fill="#121212"/>
      <path d="M96.3776 42L114.982 74.2238H77.7732L96.3776 42Z" fill="#F5F5F4"/>
      <path d="M53.4126 117.189H139.343L150.755 138H42L53.4126 117.189Z" fill="white" fillOpacity="0.7"/>
      <path d="M120.545 84.965H72.2098L60.1259 106.448H132.629L120.545 84.965Z" fill="white" fillOpacity="0.85"/>
    </svg>
  );
}

export default Logo;
