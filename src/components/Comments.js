import React, { useEffect } from "react";
import { formatDate } from "./../utils/utils";
import "./Comments.scss";

const Comments = (props) => {
  useEffect(() => {
    console.log(props.passedcomments);
  });

  return (
    <div className="commentContainer">
      <div className="commentHeader">Comments:</div>
      {props.passedcomments.map((comment) => {
        return (
          <>
            <div className="commentGrid">
              <div className="commentNameEmail">
                <span className="name">
                  {comment.firstName} {comment.lastName}
                </span>
                <br />
                <span className="email">{comment.email}</span>
              </div>
              <div className="commentBody"> {comment.body}</div>
              <div className="commentCreatedAt">
                Created at: {formatDate(comment.createdAt)}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Comments;
