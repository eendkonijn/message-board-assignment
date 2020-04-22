import {
  FETCH_SUCCESS,
  FETCH_LIST,
  FETCH_FAIL,
  NEXT_PAGE,
  PREV_PAGE,
  FETCH_ONE_MESSAGE,
  FETCH_ONE_MESSAGE_FAIL,
  FETCH_ONE_MESSAGE_SUCCESS,
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  error: "",
  messages: [],
  offset: 0,
  limit: 20,
  message: [],
  comments: [],
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
        offset: state.offset + 50,
      };
    case PREV_PAGE:
      return {
        ...state,
        offset: state.offset - 50,
      };
    default:
      return state;
  }
  return state;
};

export default reducer;
