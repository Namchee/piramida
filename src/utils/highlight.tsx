import * as React from 'react';

import { Text } from '@chakra-ui/react';

export function highlightTerm(text: string, term: string): JSX.Element[] {
  const childs = [];

  let lastIdx = 0;
  let termIdx = text.toLowerCase().indexOf(term.toLowerCase());

  while (termIdx !== -1) {
    if (termIdx !== lastIdx) {
      childs.push(text.slice(lastIdx, termIdx));
    }

    childs.push(
      <Text as="b" fontWeight={700} key={termIdx}>
        {text.slice(termIdx, termIdx + term.length)}
      </Text>,
    );

    lastIdx = termIdx + term.length;
    termIdx = text.toLowerCase().indexOf(term.toLowerCase(), lastIdx);
  }

  childs.push(text.slice(lastIdx));

  return childs;
}
