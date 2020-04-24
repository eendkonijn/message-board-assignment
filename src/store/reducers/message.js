import {
  FETCH_ONE_MESSAGE,
  FETCH_ONE_MESSAGE_FAIL,
  FETCH_ONE_MESSAGE_SUCCESS,
} from "../actions";

const INITIAL_STATE = {
  message: {},
  error: "",
  fetchingMessage: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ONE_MESSAGE:
      return {
        ...state,
        fetchingMessage: true,
      };
    case FETCH_ONE_MESSAGE_SUCCESS:
      return {
        ...state,
        fetchingMessage: false,
        message: action.payload,
      };
    case FETCH_ONE_MESSAGE_FAIL:
      return {
        ...state,
        fetchingMessage: false,
        error: action.payload,
      };
  }
  return state;
};

export default reducer;
