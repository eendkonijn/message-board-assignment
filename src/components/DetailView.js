import React from "react";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";
import "./DetailView.scss";
import { formatDate } from "./../utils/utils";

const Comments = (props) => {
  return (
    <div>
      {/* {props.comments.map((comment) => {
        console.log(comment);
      })} */}
    </div>
  );
};

const DetailView = (props) => {
  return (
    <>
      <div className="container">
        <Image
          src={props.message.avatar}
          roundedCircle
          className="image"
          height="150px"
        />
        <div className="nameEmail">
          <div className="text">
            {props.message.firstName} {props.message.lastName} <br />
            {props.message.email}
          </div>
        </div>
        <div className="title">Title: {props.message.title}</div>
        <div className="body">Body: {props.message.body}</div>
        <div className="createdAt">
          Created at: {formatDate(props.message.createdAt)}
        </div>
      </div>
      <Comments />
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
