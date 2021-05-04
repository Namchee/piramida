import * as React from 'react';

import { Box } from '@chakra-ui/react';

import { useWindowEvent } from '@/hooks/useWindowEvent';

import { AutoCompleteContext, autoCompleteReducer } from './context';

import {
  EmptySuggestion,
  Suggestion,
  SuggestionsContainer,
  SuggestionSkeleton,
} from './Suggestion';
import AutoCompleteInput from './AutoCompleteInput';

function AutoComplete({ children }: React.PropsWithChildren<{}>): JSX.Element {
  const autoComplete = React.useRef(null);

  const [state, dispatch] = React.useReducer(autoCompleteReducer, {
    focus: false,
    focusIndex: -1,
  });

  useWindowEvent('mousedown', (event: MouseEvent) => {
    if (!state.focus) {
      return;
    }

    const target = event.target as HTMLElement;
    const elem = autoComplete.current as HTMLElement;

    if (!elem.contains(target)) {
      dispatch({ type: 'FOCUS', value: false });
    }
  });

  useWindowEvent('keydown', (event: KeyboardEvent) => {
    if (!state.focus) {
      return;
    }

    if (event.key === 'Tab') {
      dispatch({ type: 'FOCUS', value: false });
    }
  });

  return (
    <AutoCompleteContext.Provider value={{ state, dispatch }}>
      <Box w="100%" ref={autoComplete}>
        {children}
      </Box>
    </AutoCompleteContext.Provider>
  );
}

AutoComplete.Input = AutoCompleteInput;
AutoComplete.Suggestion = Suggestion;
AutoComplete.SuggestionsContainer = SuggestionsContainer;
AutoComplete.EmptySuggestion = EmptySuggestion;
AutoComplete.SuggestionSkeleton = SuggestionSkeleton;

export default AutoComplete;
