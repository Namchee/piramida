import * as React from 'react';

import { FormControl } from '@chakra-ui/react';

import { useAutoComplete } from './context';

function AutoCompleteInput({ children }: React.PropsWithChildren<{}>) {
  const { dispatch } = useAutoComplete();

  const handleInputFocus = () => {
    dispatch({ type: 'FOCUS', value: true });
    dispatch({ type: 'SELECT', value: '' });
  };

  return (
    <FormControl
      onFocusCapture={handleInputFocus}>
      {children}
    </FormControl>
  );
}

export default AutoCompleteInput;
