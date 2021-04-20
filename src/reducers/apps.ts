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
        error: '',
        isLoading: true,
        data: [] as App[],
      };
    }
    case 'FETCH_SUCCESS': {
      return {
        isLoading: false,
        data: action.data,
        error: '',
      };
    }
    default: {
      return {
        isLoading: false,
        error: action.error,
        data: [],
      };
    }
  }
};
