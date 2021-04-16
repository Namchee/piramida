export interface Illegal {
  name: string;
}

export interface IllegalState {
  isLoading: boolean;
  error: string;
  data: Illegal[];
};

export type IllegalAction = { type: 'FETCH_LOADING' } |
{ type: 'FETCH_SUCCESS', data: Illegal[] } |
{ type: 'FETCH_ERROR', error: string };

export const illegalInitialState: IllegalState = {
  isLoading: false,
  error: '',
  data: [],
};

export const illegalReducer = (state: IllegalState, action: IllegalAction) => {
  switch (action.type) {
  case 'FETCH_LOADING': {
    return {
      ...state,
      isLoading: true,
      data: [] as Illegal[],
    };
  }
  case 'FETCH_SUCCESS': {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  }
  default: {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }
  }
};
