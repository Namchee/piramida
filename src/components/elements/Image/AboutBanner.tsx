import { StyleProps } from '@/common/types';
import * as React from 'react';

/**
 * About banner image. Used in about page.
 * Probably will be animated in the future.
 *
 * @return {JSX.Element} about banner image SVG component
 */
function AboutBanner(
  { className }: React.PropsWithoutRef<StyleProps>,
): JSX.Element {
  return (
    <svg
      className={className}
      viewBox="0 0 146 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M72.5035 0L97.3094 42.965H47.6976L72.5035 0Z" fill="black" />
      <path
        d="M15.2168 100.252H129.79L145.007 128H0L15.2168 100.252Z"
        fill="black"
        fillOpacity="0.7"
      />
      <path
        d="M104.727 57.2867H40.2798L24.1679 85.9301H120.839L104.727 57.2867Z"
        fill="black"
        fillOpacity="0.85"
      />
    </svg>
  );
}

export default AboutBanner;
