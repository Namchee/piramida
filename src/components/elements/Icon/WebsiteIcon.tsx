import * as React from 'react';

import { StyleProps } from '@/common/types';

/**
 * Website icon component. Just an SVG component.
 *
 * @param {StyleProps} props style props, style it with windi
 * @return {JSX.Element} website icon as component.
 */
function CompanyIcon({
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
        d="M221.597 173.313A103.979 103.979 0 0 0 154.845 27.52a8.117 8.117 0 0 0-.546-.148A103.908 103.908 0 0 0 60.392 49.04a7.944 7.944 0 0 0-1.336 1.168A103.95 103.95 0 0 0 128 232c.736 0 1.469-.013 2.201-.028l.054.003c.035 0 .069-.004.103-.005a104.13 104.13 0 0 0 90.606-57.385l.015-.021a7.967 7.967 0 0 0 .618-1.25zM216 128a87.578 87.578 0 0 1-5.531 30.707l-46.4-28.539a15.902 15.902 0 0 0-6.244-2.227l-22.819-3.076a16.108 16.108 0 0 0-15.321 6.815h-8.543l-3.805-7.86a16.002 16.002 0 0 0-11.042-8.674l-6.566-1.41l2.518-5.977a8 8 0 0 1 7.373-4.895h16.034a16.027 16.027 0 0 0 7.735-1.994l12.243-6.76a16.037 16.037 0 0 0 2.996-2.138l26.91-24.338a15.907 15.907 0 0 0 4.434-16.963A88.075 88.075 0 0 1 216 128zm-176 0a87.462 87.462 0 0 1 9.46-39.665l10.424 27.82a15.93 15.93 0 0 0 11.62 10.028l5.514 1.185l.045.01l12.054 2.59a8 8 0 0 1 5.52 4.336l2.104 4.347a16 16 0 0 0 14.401 9.029h1.109l-7.695 17.267a15.984 15.984 0 0 0 2.866 17.375l16.05 17.36a8 8 0 0 1 1.98 6.95l-1.79 9.26A88.109 88.109 0 0 1 40 128z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default CompanyIcon;
