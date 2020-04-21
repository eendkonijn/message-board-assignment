import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { formatDate } from "../utils/utils";
import { connect, useSelector } from "react-redux";
import {
  fetchMessageList,
  prevPage,
  nextPage,
  fetchMessage,
} from "./../store/actions";
import DetailView from "./DetailView";
import { Link } from "react-router-dom";

const Home = (props) => {
  // I've left these in for my own reference. RvdS
  //   const [messages, setMessages] = useState([]);
  const limit = 50;
  const [showing, setShowing] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    // This code is left in for my own reference. RvdS
    //   getMessagesList(limit)
    //     .then((data) => setMessages(data))
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    props.fetchMessageList(limit, props.offset);
  }, [props.offset]);

  const loadNextPage = () => {
    props.nextPage();
  };

  const loadPreviousPage = () => {
    props.prevPage();
  };

  const renderMessage = (message) => {
    props.fetchMessage(message.id);
    setShowing(!showing);
    setSelectedMessage(message);
    console.log("render message clicked", message.id);
  };

  return (
    <>
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
      </div>
      {showing && <DetailView />}
      <Table size="sm" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Title</th>
            <th>Creation Date</th>
          </tr>
        </thead>

        <tbody>
          {props.messages.map((message) => {
            return (
              <>
                <tr
                  key={message.id}
                  onClick={() => {
                    renderMessage(message);
                  }}
                >
                  <td>{message.firstName}</td>
                  <td>{message.title}</td>
                  <td>{formatDate(message.createdAt)}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      {props.error && <Alert variant="danger">{props.error} </Alert>}
      {props.isFetching && <Spinner animation="border" variant="success" />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    isFetching: state.isFetching,
    error: state.error,
    offset: state.offset,
  };
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
})(Home);
