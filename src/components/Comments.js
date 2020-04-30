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
              <span>
                {comment.firstName} {comment.lastName}
              </span>
              <br />
              <span>{comment.email}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  error: PropTypes.string,
};

export default Comments;
