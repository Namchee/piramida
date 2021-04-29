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

  const handleHover = () => {
    dispatch({ type: 'FOCUS_INDEX', value: index });
  };

  return (
    <Button
      onMouseOver={handleHover}
      onMouseMove={handleHover}
      fontWeight={400}
      h="unset"
      w="100%"
      p={4}
      display="flex"
      justifyContent="start"
      alignItems="center"
      rounded="false"
      onClick={handleClick}
      backgroundColor={index === focusIndex ? 'gray.100' : 'transparent'}
      _hover={{
        backgroundColor: index === focusIndex ? 'gray.100' : 'transparent',
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
