import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { formatDate } from "../utils/utils";
import { getMessagesList } from "./../api/api";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { SHOW_LIST } from "./../store/actions";

const Home = (props) => {
  //   const [messages, setMessages] = useState([]);
  const limit = 50;
  const messages = useSelector((state) => state.messages);

  useEffect(() => {
    getMessagesList(limit)
      .then((data) => setMessages(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
          {messages.map((message) => {
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
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { messages: state.messages };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessageList: () => dispatch({ type: actionTypes.SHOW_LIST }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
