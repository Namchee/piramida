import * as React from 'react';

import { StyleProps } from '@/common/types';

/**
 * Caret right icon component. Just an SVG component.
 *
 * @param {StyleProps} props style props, style it with windi
 * @return {JSX.Element} caret right icon as component.
 */
function CaretRightIcon(
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
        d="M96 216a8 8 0 0 1-5.657-13.657L164.686 128L90.343 53.657a8 8 0 0 1 11.314-11.314l80 80a8 8 0 0 1 0 11.314l-80 80A7.975 7.975 0 0 1 96 216z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default CaretRightIcon;
