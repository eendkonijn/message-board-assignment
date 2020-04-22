import React, { useEffect } from "react";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";
import "./DetailView.scss";
import { formatDate } from "./../utils/utils";
import Comments from "./Comments";

const DetailView = (props) => {
  useEffect(() => {
    console.log(props.comments);
  });

  return (
    <>
      <div className="messageContainer">
        <Image
          src={props.message.avatar}
          roundedCircle
          className="image"
          height="150px"
        />
        <div className="nameEmail">
          <span className="name">
            {props.message.firstName} {props.message.lastName}
          </span>
          <br />
          <span className="email"> {props.message.email}</span>
        </div>
        <div className="title">{props.message.title}</div>
        <div className="body">{props.message.body}</div>
        <div className="createdAt">
          Created at: {formatDate(props.message.createdAt)}
        </div>
      </div>

      <Comments passedcomments={props.comments} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.singlepost.message,
    comments: state.comments.comments,
  };
};

export default connect(mapStateToProps)(DetailView);
