import { combineReducers } from "redux";
import messagelist from "./messagelist";
import singlepost from "./singlepost";
import comments from "./comments";

export default combineReducers({
  messagelist: messagelist,
  singlepost: singlepost,
  comments: comments,
});
