import * as React from 'react';

import { StyleProps } from '@/common/types';

/**
 * Arrow up icon component. Just an SVG component.
 *
 * @param {StyleProps} props style props, style it with windi
 * @return {JSX.Element} arrow up icon as component.
 */
function ArrowUpIcon({
  className,
}: React.PropsWithoutRef<StyleProps>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className={className}
      width="32"
      height="32"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 256"
    >
      <path
        // eslint-disable-next-line max-len
        d="M205.657 117.657a8 8 0 0 1-11.314 0L136 59.313V216a8 8 0 0 1-16 0V59.313l-58.343 58.344a8 8 0 0 1-11.314-11.314l72-72a8.002 8.002 0 0 1 11.314 0l72 72a8 8 0 0 1 0 11.314z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default ArrowUpIcon;
