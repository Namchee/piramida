import * as React from 'react';

export type AutoCompleteState = {
  focus: boolean;
  focusIndex: number;
  selected: string;
};

export type AutoCompleteAction = { type: 'FOCUS', value: boolean } |
  { type: 'FOCUS_INDEX', value: number } |
  { type: 'SELECT', value: string };

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
    case 'SELECT': {
      return {
        ...state,
        selected: action.value,
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

export function useAutoComplete() {
  const context = React.useContext(AutoCompleteContext);

  if (context === undefined) {
    throw new Error('useAutoComplete must be used with AutoCompleteContext');
  }

  return context;
}
