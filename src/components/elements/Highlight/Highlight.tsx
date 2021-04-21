import * as React from 'react';

import { Text } from '@chakra-ui/react';

export type HighlightProps = {
  text: string;
  term: string;
}

function Highlight({ text, term }: React.PropsWithoutRef<HighlightProps>): JSX.Element {
  const children = [];

  let lastIdx = 0;
  let termIdx = text.toLowerCase().indexOf(term.toLowerCase());

  while (termIdx !== -1) {
    if (termIdx !== lastIdx) {
      children.push(text.slice(lastIdx, termIdx));
    }

    children.push(
      <Text as="b" fontWeight={700} key={termIdx}>
        {text.slice(termIdx, termIdx + term.length)}
      </Text>,
    );

    lastIdx = termIdx + term.length;
    termIdx = text.toLowerCase().indexOf(term.toLowerCase(), lastIdx);
  }

  children.push(text.slice(lastIdx));

  return (
    <>
      {children}
    </>
  );
}

export default Highlight;
