import * as React from 'react';

import { useAutoComplete } from './context';

/**
 * Autocomplete input headless component. Any kind of input
 * from an autocomplete must be a children of this component.
 *
 * @return {JSX.Element} autocomplete input headless component
 */
function AutoCompleteInput(
  { children }: React.PropsWithChildren<Record<string, unknown> >,
): JSX.Element {
  const { dispatch } = useAutoComplete();

  const handleInputFocus = () => {
    dispatch({ type: 'FOCUS', value: true });
    dispatch({ type: 'FOCUS_INDEX', value: -1 });
  };

  return (
    <div onFocusCapture={handleInputFocus}>
      {children}
    </div>
  );
}

export default AutoCompleteInput;
