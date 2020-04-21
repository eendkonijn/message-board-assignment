import fetch from "node-fetch";

export const FETCH_LIST = "FETCH_LIST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";

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

export const fetchUsers = (limit, offset) => {
  const API_URL = `http://localhost:3000/messages?limit=${limit}&offset=${offset}`;
  return function (dispatch) {
    dispatch(fetchList(offset));

    return fetch(API_URL)
      .then((response) => response.json())
      .then(
        (json) => {
          dispatch(fetchSuccess(json));
        },
        (err) => {
          dispatch(fetchFail("Oeps er ging iets mis!")),
            console.log("Fout: " + err);
        }
      );
  };
};
