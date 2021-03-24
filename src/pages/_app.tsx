import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { theme, Fonts } from '@/assets/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
