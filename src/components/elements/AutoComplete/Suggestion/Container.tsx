import * as React from 'react';

import { Box, As } from '@chakra-ui/react';

import { useWindowEvent } from '@/hooks/useWindowEvent';
import { useAutoComplete } from '../context';

export type SuggestionsContainerProps = {
  as?: As<any>;
  maxHeight?: number;
  margin?: number;
};

function SuggestionsContainer(
  { as, margin, maxHeight, children }: React.PropsWithChildren<SuggestionsContainerProps>,
) {
  const containerRef = React.useRef(null);

  const { state, dispatch } = useAutoComplete();
  const { focus, focusIndex } = state;

  useWindowEvent('keypress', (event: KeyboardEvent) => {
    if (!focus) {
      return;
    }

    const childElements = React.Children.toArray(children) as React.ReactElement[];
    const childAsHtml = Array.from(
      (containerRef.current as HTMLElement).children,
    );

    switch (event.key) {
      case 'ArrowUp': {
        event.preventDefault();

        dispatch({ type: 'FOCUS_INDEX', value: focusIndex - 1 });

        if (focusIndex < 0) {
          dispatch({ type: 'FOCUS_INDEX', value: childElements.length - 1 });
        }

        (childAsHtml[focusIndex] as HTMLElement).focus();

        break;
      }
      case 'ArrowDown': {
        event.preventDefault();

        dispatch({ type: 'FOCUS_INDEX', value: focusIndex + 1 % childElements.length });

        (childAsHtml[focusIndex] as HTMLElement).focus();

        break;
      }
      case 'Enter': {
        event.preventDefault();

        dispatch({ type: 'SELECT', value: childElements[focusIndex].props.name });
        dispatch({ type: 'FOCUS', value: false });

        break;
      }
      case 'Space': {
        event.preventDefault();

        dispatch({ type: 'SELECT', value: childElements[focusIndex].props.name });
        dispatch({ type: 'FOCUS', value: false });

        break;
      }
    }
  });

  if (!focus) {
    return <></>;
  }

  return (
    <Box
      ref={containerRef}
      zIndex={1}
      as={as}
      top="100%"
      role="listbox"
      borderRadius="md"
      marginTop={margin || 2}
      maxH={maxHeight || 48}
      overflowY="auto"
      boxShadow="lg">
      {children}
    </Box>
  );
}

export default SuggestionsContainer;
