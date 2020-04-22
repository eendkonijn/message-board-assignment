import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from "../actions";

const INITIAL_STATE = {
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
  }
  return state;
};

export default reducer;
