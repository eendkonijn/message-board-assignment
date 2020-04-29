import React from "react";
import { formatDate } from "./../utils/utils";
import "./Comments.scss";
import PropTypes from "prop-types";

const Comments = (props) => {
  return (
    <div className="comments">
      <div className="comments__header" hidden={props.error}>
        Comments:
      </div>
      {props.comments.map((comment, i) => {
        return (
          <div className="comments__grid" key={i}>
            <div className="comments__nameEmail">
              <span className="name">
                {comment.firstName} {comment.lastName}
              </span>
              <br />
              <span className="email">{comment.email}</span>
            </div>
            <div className="comments__body"> {comment.body}</div>
            <div className="comments__createdAt">
              Created at: {formatDate(comment.createdAt)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;
