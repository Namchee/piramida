import * as React from 'react';

import { Box } from '@chakra-ui/react';

import { useWindowEvent } from '@/hooks/useWindowEvent';

import { AutoCompleteContext, autoCompleteReducer } from './context';

function AutoComplete({ children }: React.PropsWithChildren<{}>): JSX.Element {
  const autoComplete = React.useRef(null);

  const [state, dispatch] = React.useReducer(autoCompleteReducer, {
    focus: false,
    focusIndex: -1,
  });

  useWindowEvent('click', (event: MouseEvent) => {
    if (!focus) {
      return;
    }

    const target = event.target as HTMLElement;
    const elem = autoComplete.current as HTMLElement;

    if (!elem.contains(target)) {
      dispatch({ type: 'FOCUS', value: false });
    }
  });

  return (
    <AutoCompleteContext.Provider value={{ state, dispatch }}>
      <Box
        w="100%"
        ref={autoComplete}>
        {children}
      </Box>
    </AutoCompleteContext.Provider>
  );
}

export default AutoComplete;
