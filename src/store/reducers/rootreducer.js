import { combineReducers } from "redux";
import messagelist from "./messagelist";
import message from "./message";
import comments from "./comments";

export default combineReducers({
  messagelist: messagelist,
  message: message,
  comments: comments,
});
