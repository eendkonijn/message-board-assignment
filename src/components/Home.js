import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { formatDate } from "../utils/utils";
import { connect } from "react-redux";
import {
  fetchMessageList,
  prevPage,
  nextPage,
  fetchMessage,
  fetchComments,
} from "./../store/actions";
import DetailView from "./DetailView";
import "./Home.scss";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Home = (props) => {
  // I've left these in for my own reference. RvdS
  //   const [messages, setMessages] = useState([]);
  const limit = 20;
  const [showing, setShowing] = useState(false);
  const { fetchMessageList, offset } = props;

  useEffect(() => {
    // This code is left in for my own reference. RvdS
    //   getMessagesList(limit)
    //     .then((data) => setMessages(data))
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    fetchMessageList(limit, offset);
  }, [fetchMessageList, limit, offset]);

  const loadNextPage = () => {
    props.nextPage();
  };

  const loadPreviousPage = () => {
    props.prevPage();
  };

  const renderMessage = (message) => {
    props.fetchMessage(message.id);
    props.fetchComments(message.id);
    setShowing(true);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const closeDetailView = () => {
    setShowing(false);
  };

  return (
    <>
      {showing && <DetailView />}
      {showing && (
        <div className="closeMessageBar" onClick={closeDetailView}>
          CLOSE
        </div>
      )}
      <Table size="sm" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Title</th>
            <th>Creation Date</th>
          </tr>
        </thead>

        <tbody>
          {props.messages.map((message, i) => {
            return (
              <tr
                className="home__table-row"
                key={message.id}
                onClick={() => {
                  renderMessage(message);
                }}
              >
                <td>{message.firstName}</td>
                <td>{message.title}</td>
                <td>{formatDate(message.createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.error && <Alert variant="danger">{props.error} </Alert>}
      {props.isFetching && <Spinner animation="border" variant="success" />}
      <div className="buttons">
        <span className="button">
          <Button
            variant="dark"
            onClick={() => {
              loadPreviousPage();
            }}
            disabled={props.offset === 0}
          >
            Vorige
          </Button>
        </span>
        <span className="button">
          <Button
            variant="dark"
            onClick={() => {
              loadNextPage();
            }}
            disabled={props.messages.length < limit}
          >
            Volgende
          </Button>
        </span>
        <Link className="button" to="/create">
          <Button variant="dark">Maak Bericht</Button>
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messagelist.messages,
    isFetching: state.messagelist.isFetching,
    error: state.messagelist.error,
    offset: state.messagelist.offset,
    comments: state.comments.comments,
  };
};

Home.propTypes = {
  messages: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  offset: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  fetchMessageList: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  fetchMessage: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
};

//for my own reference. RvdS
// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch,
//     // nextPage: () =>
//     //   dispatch({
//     //     type: actionTypes.NEXT_PAGE,
//     //     newOffset: 50,
//     //   }),
//     // fetchMessageList: () => dispatch(fetchMessageList()),
//   };
// };

export default connect(mapStateToProps, {
  fetchMessageList,
  prevPage,
  nextPage,
  fetchMessage,
  fetchComments,
})(Home);
