import React from "react";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";
import "./DetailView.scss";
import { formatDate } from "./../utils/utils";
import Comments from "./Comments";
import { PropTypes } from "prop-types";

const DetailView = (props) => {
  return (
    <>
      <div className="detail-view">
        <Image
          src={props.message.avatar}
          roundedCircle
          className="detail-view__image"
          height="150px"
        />
        <div className="detail-view__name-email">
          <span className="detail-view__name">
            {props.message.firstName} {props.message.lastName}
          </span>
          <br />
          <span className="detail-view__email"> {props.message.email}</span>
        </div>
        <div className="detail-view__title">{props.message.title}</div>
        <div className="detail-view__body">
          {props.error && "Not Found sorry hoor"}
          {props.message.body}
        </div>
        <div className="detail-view__createdAt" hidden={props.error}>
          Created at: {formatDate(props.message.createdAt)}
        </div>
      </div>

      <Comments comments={props.comments} error={props.error} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message.message,
    comments: state.comments.comments,
    error: state.message.error,
  };
};

DetailView.propTypes = {
  message: PropTypes.object,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
  body: PropTypes.string,
  title: PropTypes.string,
  comments: PropTypes.array,
  error: PropTypes.string,
};

export default connect(mapStateToProps)(DetailView);
