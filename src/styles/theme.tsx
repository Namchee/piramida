import * as React from 'react';

import { extendTheme } from '@chakra-ui/react';
import { Global } from '@emotion/react';

function Fonts() {
  return (
    <Global
      styles={`
        @font-face {
          font-family: 'Inter';
          src: local('Inter'),
            url('fonts/inter-regular.woff2') format('woff2');
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
      
        @font-face {
          font-family: 'Inter';
          src: local('Inter'),
            url('fonts/inter-italic.woff2') format('woff2');
          font-style: italic;
          font-weight: 400;
          font-display: swap;
        }

        @font-face {
          font-family: 'Inter';
          src: local('Inter'),
            url('fonts/inter-medium.woff2') format('woff2');
          font-style: normal;
          font-weight: 500;
          font-display: swap;
        }
      
        @font-face {
          font-family: 'Inter';
          src: local('Inter'),
            url('fonts/inter-bold.woff2') format('woff2');
          font-style: normal;
          font-weight: 700;
          font-display: swap;
        }
      `} />
  );
}

const theme = extendTheme({
  colors: {
    primary: {
      lighten: '#4F8FF7',
      base: '#3B82F6',
      darken: '#3575DD',
    },
    yellow: {
      100: '#FEFCC7',
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
});

export { theme, Fonts };