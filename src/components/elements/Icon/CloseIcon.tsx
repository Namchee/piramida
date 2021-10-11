import * as React from 'react';

import { StyleProps } from '@/common/types';

/**
 * Close icon. Just a simple SVG component
 *
 * @param {StyleProps} props style props, style it with windi
 * @return {JSX.Element} close icon
 */
function CloseIcon(
  { className }: React.PropsWithoutRef<StyleProps>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 256"
    >
      <path
        // eslint-disable-next-line max-len
        d="M205.657 194.343a8 8 0 1 1-11.314 11.314L128 139.313l-66.343 66.344a8 8 0 0 1-11.314-11.314L116.687 128L50.343 61.657a8 8 0 0 1 11.314-11.314L128 116.687l66.343-66.344a8 8 0 0 1 11.314 11.314L139.313 128z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default CloseIcon;
