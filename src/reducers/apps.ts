export interface App {
  name: string;
}

export interface AppState {
  isLoading: boolean;
  error: string;
  data: App[];
};

export type AppAction = { type: 'FETCH_LOADING' } |
{ type: 'FETCH_SUCCESS', data: App[] } |
{ type: 'FETCH_ERROR', error: string };

export const appInitialState: AppState = {
  isLoading: false,
  error: '',
  data: [],
};

export const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
  case 'FETCH_LOADING': {
    return {
      ...state,
      isLoading: true,
      data: [] as App[],
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
