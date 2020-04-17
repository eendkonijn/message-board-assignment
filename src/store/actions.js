import fetch from "node-fetch";

export const FETCH_LIST = "FETCH_LIST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const NEXT_PAGE = "NEXT_PAGE";

const fetchList = (offset) => {
  return {
    type: FETCH_LIST,
    payload: offset,
  };
};

const fetchSuccess = (messages) => {
  return {
    type: FETCH_SUCCESS,
    payload: messages,
  };
};

const fetchFail = (error) => {
  return {
    type: FETCH_FAIL,
    payload: error,
  };
};

export const fetchUsers = (offset) => {
  console.log("in fetch-functie:" + offset);
  const API_URL = "http://localhost:3000/messages?limit=50&offset=" + offset;
  const API_URL_BAD = "http://localhost:3000/errrrr";
  return function (dispatch) {
    dispatch(fetchList(offset));

    return fetch(API_URL)
      .then(
        (response) => response.json(),
        (error) => dispatch(fetchFail(error))
      )
      .then((json) => dispatch(fetchSuccess(json)));
  };
};
