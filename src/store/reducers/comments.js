import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  comments: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        comments: action.payload,
      };
    case FETCH_COMMENTS_FAIL:
      return {
        state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
  return state;
};

export default reducer;
