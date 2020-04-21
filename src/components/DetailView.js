import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";
import "./DetailView.scss";

const DetailView = (props) => {
  useEffect(() => {
    console.log("message", props.message);
  }, []);

  return (
    <div className="messageContainer">
      <Image src={props.message.avatar} roundedCircle className="image" />
      <div className="nameEmail">
        {props.message.firstName} {props.message.lastName} <br />
        {props.message.email}
      </div>
      <div className="title">Title: {props.message.title}</div>
      <div className="body">Body: {props.message.body}</div>
      <div className="createdAt">{props.message.createdAt}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

export default connect(mapStateToProps)(DetailView);
