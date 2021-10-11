import * as React from 'react';

import { StyleProps } from '@/common/types';

/**
 * GitHub icon as component. Basically just an SVG.
 *
 * @param {StyleProps} props style props, style it with windi
 * @return {JSX.Element} GitHub icon
 */
function GitHubIcon(
  { className }: React.PropsWithoutRef<StyleProps>,
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 256"
      className={className}
    >
      <path
        // eslint-disable-next-line max-len
        d="M216 216a16.018 16.018 0 0 1-16-16v-8a31.996 31.996 0 0 0-14.78-26.95A55.95 55.95 0 0 0 208 120v-8a58.044 58.044 0 0 0-7.695-28.32A59.737 59.737 0 0 0 194.928 36A8 8 0 0 0 188 32a59.748 59.748 0 0 0-48.008 24l-23.985-.001A59.75 59.75 0 0 0 68 32a8 8 0 0 0-6.928 4a59.737 59.737 0 0 0-5.377 47.68A58.044 58.044 0 0 0 48 112v8a55.95 55.95 0 0 0 22.78 45.05A31.996 31.996 0 0 0 56 192v8a16.018 16.018 0 0 1-16 16a8 8 0 0 0 0 16a32.036 32.036 0 0 0 32-32v-8a16.018 16.018 0 0 1 16-16h12v40a16.018 16.018 0 0 1-16 16a8 8 0 0 0 0 16a32.036 32.036 0 0 0 32-32v-40h24v40a32.036 32.036 0 0 0 32 32a8 8 0 0 0 0-16a16.018 16.018 0 0 1-16-16v-40h12a16.018 16.018 0 0 1 16 16v8a32.036 32.036 0 0 0 32 32a8 8 0 0 0 0-16zM64 120v-8a41.78 41.78 0 0 1 6.9-22.482a8 8 0 0 0 1.078-7.688a43.823 43.823 0 0 1 .789-33.575a43.84 43.84 0 0 1 32.32 20.058a8 8 0 0 0 6.738 3.686l32.35.001a8 8 0 0 0 6.737-3.687a43.842 43.842 0 0 1 32.321-20.058a43.823 43.823 0 0 1 .789 33.575a8.084 8.084 0 0 0 1.05 7.65A41.762 41.762 0 0 1 192 112v8a40.046 40.046 0 0 1-40 40h-48a40.046 40.046 0 0 1-40-40z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default GitHubIcon;
