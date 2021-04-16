import * as React from 'react';

import { As, Box, Text } from '@chakra-ui/react';
import { useAutoComplete } from '../context';

export type SuggestionProps = {
  term: string;
  text: string;
  as?: As<any>;
  onClick?: (text: string) => void;
  onSelected?: (text: string) => void;
}

function Suggestion({ as, term, text, onClick, onSelected }: React.PropsWithoutRef<SuggestionProps>) {
  const { state, dispatch } = useAutoComplete();
  const { selected } = state;

  const contentBuilder = () => {
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
  };

  const handleClick = () => {
    onClick(text);

    dispatch({ type: 'FOCUS', value: false });
  };

  React.useEffect(() => {
    if (selected) {
      onSelected(text);
    }
  }, [selected]);

  return (
    <Box
      as={as}
      p={4}
      onClick={handleClick}
      cursor='pointer'
      _hover={{
        backgroundColor: 'gray.100',
      }}
      _focus={{
        backgroundColor: 'gray.100',
        outline: 'none',
      }}>
      {contentBuilder()}
    </Box>
  );
}

export default Suggestion;
