import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { formatDate } from "../utils/utils";
import { connect, useSelector } from "react-redux";
import { fetchUsers } from "./../store/actions";
import * as actionTypes from "../store/actions";

const Home = (props) => {
  // I've left these in for my own reference. RvdS
  //   const [messages, setMessages] = useState([]);
  const limit = 50;
  const OFFSET_VARIABLE = 50;

  useEffect(() => {
    // This code is left in for my own reference. RvdS
    //   getMessagesList(limit)
    //     .then((data) => setMessages(data))
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    props.dispatch(fetchUsers(props.offset));
  }, []);

  const loadNextPage = () => {
    props.dispatch({
      type: actionTypes.NEXT_PAGE,
      newOffset: 50,
    });

    setTimeout(() => {
      props.dispatch(fetchUsers(props.offset));
    }, 3000);
  };

  return (
    <>
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
              <tr key={message.id}>
                <td>{message.firstName}</td>
                <td>{message.title}</td>
                <td>{formatDate(message.createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button variant="dark">Vorige</Button>
      <Button
        variant="dark"
        onClick={() => {
          loadNextPage();
        }}
      >
        Volgende
      </Button>
      {props.isFetching && <Spinner animation="border" variant="success" />}
      <span>Hier moet een foutmelding komen: {props.error} </span>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch,
//     // nextPage: () =>
//     //   dispatch({
//     //     type: actionTypes.NEXT_PAGE,
//     //     newOffset: 50,
//     //   }),
//     // fetchUsers: () => dispatch(fetchUsers()),
//   };
// };
export default connect(mapStateToProps)(Home);
