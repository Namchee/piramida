import * as React from 'react';

export type AutoCompleteState = {
  focus: boolean;
  focusIndex: number;
};

export type AutoCompleteAction = { type: 'FOCUS', value: boolean } |
  { type: 'FOCUS_INDEX', value: number };

/**
 * Reducer for autocomplete component
 *
 * @param {AutoCompleteState} state autocomplete state
 * @param {AutoCompleteAction} action autocomplete action
 * @return {AutoCompleteState} autocomplete state
 */
export function autoCompleteReducer(
  state: AutoCompleteState,
  action: AutoCompleteAction,
): AutoCompleteState {
  switch (action.type) {
    case 'FOCUS': {
      return {
        ...state,
        focus: action.value,
      };
    }
    case 'FOCUS_INDEX': {
      return {
        ...state,
        focusIndex: action.value,
      };
    }
    default: {
      throw new Error('autoComplete: Unhandled state action');
    }
  }
}

type Dispatch = (action: AutoCompleteAction) => void;

export const AutoCompleteContext = React.createContext<
  { state: AutoCompleteState, dispatch: Dispatch } |
  undefined
>(undefined);

/**
 * autocomplete hook
 *
 * @return {React.Context} autocomplete hook
 */
export function useAutoComplete(): any {
  const context = React.useContext(AutoCompleteContext);

  if (context === undefined) {
    throw new Error('useAutoComplete must be used with AutoCompleteContext');
  }

  return context;
}
