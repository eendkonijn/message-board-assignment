import fetch from "node-fetch";

export const FETCH_LIST = "FETCH_LIST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const FETCH_ONE_MESSAGE = "FETCH_ONE_MESSAGE";
export const FETCH_ONE_MESSAGE_SUCCESS = "FETCH_ONE_MESSAGE_SUCCESS";
export const FETCH_ONE_MESSAGE_FAIL = "FETCH_ONE_MESSAGE_FAIL";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAIL = "FETCH_COMMENTS_FAIL";

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

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};

export const fetchSingleMessage = () => {
  return {
    type: FETCH_ONE_MESSAGE,
  };
};

export const singleMessageSuccess = (message) => {
  return {
    type: FETCH_ONE_MESSAGE_SUCCESS,
    payload: message,
  };
};

export const singleMessageFail = (error) => {
  return {
    type: FETCH_ONE_MESSAGE_FAIL,
    payload: error,
  };
};

export const fetchMessageList = (limit, offset) => {
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

export const fetchMessage = (id) => {
  const API_URL = `http://localhost:3000/messages/${id}`;

  return function (dispatch) {
    dispatch(fetchSingleMessage);

    return fetch(API_URL)
      .then((response) => response.json())
      .then(
        (json) => {
          dispatch(singleMessageSuccess(json));
        },
        (err) => {
          dispatch(singleMessageFail("not found")), console.log("Fout: " + err);
        }
      );
  };
};

export const fetchingComments = () => {
  return {
    type: FETCH_COMMENTS,
  };
};

export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const fetchCommentsFail = (error) => {
  return {
    type: FETCH_COMMENTS_FAIL,
    payload: error,
  };
};

export const fetchComments = (id) => {
  const API_URL = `http://localhost:3000/messages/${id}/comments`;

  return function (dispatch) {
    dispatch(fetchingComments);

    return fetch(API_URL)
      .then((response) => response.json())
      .then(
        (json) => {
          dispatch(fetchCommentsSuccess(json));
        },
        (err) => {
          dispatch(fetchCommentsFail("Oeps er ging iets mis!")),
            console.log("Fout: " + err);
        }
      );
  };
};
