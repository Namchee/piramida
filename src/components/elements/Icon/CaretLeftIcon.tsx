import * as React from 'react';

import { StyleProps } from '@/common/types';

/**
 * Caret left icon component. Just an SVG component.
 *
 * @param {StyleProps} props style props, style it with windi
 * @return {JSX.Element} caret left icon as component.
 */
function CaretLeftIcon(
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
        d="M160 216a7.975 7.975 0 0 1-5.657-2.343l-80-80a8 8 0 0 1 0-11.314l80-80a8 8 0 0 1 11.314 11.314L91.314 128l74.343 74.343A8 8 0 0 1 160 216z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default CaretLeftIcon;
