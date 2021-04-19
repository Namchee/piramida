import * as React from 'react';

import { Button } from '@chakra-ui/button';

import { useAutoComplete } from '../context';

type SuggestionProps = {
  index: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Suggestion({ index, onClick, children }: React.PropsWithChildren<SuggestionProps>) {
  const { state, dispatch } = useAutoComplete();
  const { focusIndex } = state;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: 'FOCUS', value: false });

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Button
      fontWeight={400}
      text
      w="100%"
      paddingX={4}
      paddingY={6}
      display="flex"
      justifyContent="start"
      alignItems="center"
      rounded="false"
      onClick={handleClick}
      backgroundColor={index === focusIndex ? 'gray.100' : 'white'}
      _hover={{
        backgroundColor: 'gray.100',
      }}
      _focus={{
        backgroundColor: 'gray.100',
      }}
      _active={{
        backgroundColor: 'gray.100',
      }}
      outline="none">
      {children}
    </Button>
  );
}

export default Suggestion;
