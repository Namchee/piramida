import * as React from 'react';

import { StyleProps } from '@/common/types';

/**
 * Company icon component. Just an SVG component.
 *
 * @param {StyleProps} props style props, style it with windi
 * @return {JSX.Element} company icon as component.
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
        d="M240 207.983h-8.006v-104a16.018 16.018 0 0 0-16-16h-64v-48a16.018 16.018 0 0 0-16-16h-96a16.018 16.018 0 0 0-16 16v168H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16zm-24.006-104v104h-64v-104zm-176-64h96v168h-96zm16 32a8 8 0 0 1 8-8h32a8 8 0 1 1 0 16h-32a8 8 0 0 1-8-8zm64 64a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8zm-16 40a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8zm96 0a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8zm-32-40a8 8 0 0 1 8-8h16a8 8 0 1 1 0 16h-16a8 8 0 0 1-8-8z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default CompanyIcon;
