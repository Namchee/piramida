import * as React from 'react';

import { StyleProps } from '@/common/types';

/**
 * Error icon as component. Just an SVG component.
 *
 * @param {StyleProps} props style props, style it with windi
 * @return {JSX.Element} error icon as component
 */
function ErrorIcon({
  className,
}: React.PropsWithoutRef<StyleProps>): JSX.Element {
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
        d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24zm37.656 130.344a8 8 0 1 1-11.312 11.312L128 139.312l-26.344 26.344a8 8 0 0 1-11.312-11.312L116.688 128l-26.344-26.344a8 8 0 0 1 11.312-11.312L128 116.688l26.344-26.344a8 8 0 0 1 11.312 11.312L139.312 128z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default ErrorIcon;
