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

  useWindowEvent('keydown', (event: KeyboardEvent) => {
    if (!focus) {
      return;
    }

    const childElements = React.Children.toArray(children) as React.ReactElement[];
    const childrenAsHtml = Array.from(
      (containerRef.current as HTMLElement).children,
    );

    switch (event.key) {
      case 'ArrowUp': {
        event.preventDefault();

        if (focusIndex > 0) {
          dispatch({ type: 'FOCUS_INDEX', value: focusIndex - 1 });
        } else {
          dispatch({ type: 'FOCUS_INDEX', value: 0 });
        }

        break;
      }
      case 'ArrowDown': {
        event.preventDefault();

        if (focusIndex < childElements.length - 1) {
          dispatch({ type: 'FOCUS_INDEX', value: focusIndex + 1 });
        } else {
          dispatch({ type: 'FOCUS_INDEX', value: childElements.length - 1 });
        }

        break;
      }
      case 'Enter': {
        event.preventDefault();

        if (childElements[focusIndex].type['name'] === 'Suggestion') {
          (childrenAsHtml[focusIndex] as HTMLButtonElement).click();
        }

        break;
      }
      case 'Space': {
        event.preventDefault();

        if (childElements[focusIndex].type['name'] === 'Suggestion') {
          (childrenAsHtml[focusIndex] as HTMLButtonElement).click();
        }

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
      as={as}
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
