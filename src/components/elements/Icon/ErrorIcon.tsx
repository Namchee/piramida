import * as React from 'react';

import { StyleProps } from '@/common/types';

/**
 * Error icon as component. Just an SVG component.
 *
 * @param {StyleProps} props style props, style it with windi
 * @return {JSX.Element} error icon as component
 */
function ErrorIcon(
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
      <circle
        cx="128"
        cy="128"
        r="96"
        opacity=".2"
        fill="currentColor"
      ></circle>
      <path
        // eslint-disable-next-line max-len
        d="M128 24a104 104 0 1 0 104 104A104.118 104.118 0 0 0 128 24zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88z"
        fill="currentColor"
      ></path>
      <path
        // eslint-disable-next-line max-len
        d="M165.657 90.343a8.001 8.001 0 0 0-11.314 0L128 116.686l-26.343-26.343a8 8 0 1 0-11.314 11.314L116.686 128l-26.343 26.343a8 8 0 0 0 11.314 11.314L128 139.314l26.343 26.343a8 8 0 0 0 11.314-11.314L139.314 128l26.343-26.343a8 8 0 0 0 0-11.314z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default ErrorIcon;
