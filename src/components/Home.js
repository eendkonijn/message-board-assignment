import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { formatDate } from "../utils/utils";
import { getData } from "../api/api";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const limit = 50;

  useEffect(() => {
    getData(limit)
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

export default Home;
