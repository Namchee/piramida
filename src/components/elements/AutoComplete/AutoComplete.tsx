import * as React from 'react';

import { useWindowEvent } from '@/hooks/useWindowEvent';

import { AutoCompleteContext, autoCompleteReducer } from './context';

import {
  EmptySuggestion,
  Suggestion,
  SuggestionsContainer,
} from './Suggestion';
import AutoCompleteInput from './AutoCompleteInput';

import { StyleProps } from '@/common/types';

/**
 * Autocomplete component
 *
 * @return {JSX.Element} autocomplete component
 */
function AutoComplete(
  { children, className }: React.PropsWithChildren<StyleProps>,
): JSX.Element {
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
      <div className={className} ref={autoComplete}>
        {children}
      </div>
    </AutoCompleteContext.Provider>
  );
}

AutoComplete.Input = AutoCompleteInput;
AutoComplete.Suggestion = Suggestion;
AutoComplete.SuggestionsContainer = SuggestionsContainer;
AutoComplete.EmptySuggestion = EmptySuggestion;

export default AutoComplete;
