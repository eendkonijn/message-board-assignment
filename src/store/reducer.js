import { FETCH_SUCCESS, FETCH_LIST, FETCH_FAIL, NEXT_PAGE } from "./actions";

const INITIAL_STATE = {
  isFetching: false,
  error: "werkt nog niet",
  messages: [],
  offset: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LIST:
      return {
        ...state,
        isFetching: true,
        offset: action.payload,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        messages: action.payload,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case NEXT_PAGE:
      return {
        ...state,
        offset: action.newOffset,
      };
  }
  return state;
};

export default reducer;
