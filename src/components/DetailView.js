import React, { useEffect } from "react";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./DetailView.scss";
import { formatDate } from "./../utils/utils";
import Comments from "./Comments";
import { PropTypes } from "prop-types";
import { fetchMessage, fetchComments } from "./../store/actions";
import { Link, useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const DetailView = (props) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      props.fetchMessage(id);
      props.fetchComments(id);
    }
  });

  return (
    <>
      <div className="detail-view">
        {props.fetchingMessage && (
          <Spinner animation="border" variant="success" />
        )}
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
      {id && (
        <Link to="/">
          <Button variant="dark" className="button">
            Naar lijst
          </Button>
        </Link>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message.message,
    isFetching: state.message.fetchingMessage,
    comments: state.comments.comments,
    error: state.message.error,
  };
};

DetailView.propTypes = {
  message: PropTypes.shape({
    avatar: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    error: PropTypes.string,
  }),
  comments: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { fetchMessage, fetchComments })(
  DetailView
);
