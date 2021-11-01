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
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 256"
    >
      <path
        // eslint-disable-next-line max-len
        d="M208.485 120.485a12 12 0 0 1-16.97 0L140 68.971V216a12 12 0 0 1-24 0V68.97l-51.515 51.515a12 12 0 0 1-16.97-16.97l72-72a12.002 12.002 0 0 1 16.97 0l72 72a12 12 0 0 1 0 16.97z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default ArrowUpIcon;
