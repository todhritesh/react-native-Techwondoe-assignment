const ACTION = {
    SET_LOADING:'SET_LOADING',
    FETCH_DATA_SUCCESS:'FETCH_DATA_SUCCESS',
    FETCH_DATA_ERROR:'FETCH_DATA_ERROR',
    SET_SEARCH:'SET_SEARCH',
    SET_SEARCH_RESULTS:'SET_SEARCH_RESULTS',
}

interface State {
  data: any[];
  loading: boolean;
  error: null | string;
  search: string;
  searchResults: any[];
}

type Action =
  | { type: typeof ACTION.SET_LOADING , payload:boolean}
  | { type: typeof ACTION.FETCH_DATA_SUCCESS; payload: any[] }
  | { type: typeof ACTION.FETCH_DATA_ERROR; payload: string }
  | { type: typeof ACTION.SET_SEARCH; payload: string }
  | { type: typeof ACTION.SET_SEARCH_RESULTS; payload: any[] };

const initialState: State = {
  data: [],
  loading: false,
  error: null,
  search: '',
  searchResults: []
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ACTION.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case ACTION.FETCH_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTION.SET_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    case ACTION.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      };
    default:
      return state;
  }
};

export { initialState, reducer , ACTION };
