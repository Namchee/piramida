import * as React from 'react';

import { FormControl } from '@chakra-ui/react';

import { useAutoComplete } from './context';

function AutoCompleteInput({ children }: React.PropsWithChildren<{}>) {
  const { dispatch } = useAutoComplete();

  const handleInputFocus = () => {
    dispatch({ type: 'FOCUS', value: true });
    dispatch({ type: 'FOCUS_INDEX', value: -1 });
  };

  return (
    <FormControl onFocusCapture={handleInputFocus}>
      {children}
    </FormControl>
  );
}

export default AutoCompleteInput;
