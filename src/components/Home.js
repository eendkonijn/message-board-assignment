import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const limit = 50;

  useEffect(() => {
    fetch("http://localhost:3000/messages?limit=" + limit)
      .then((data) => data.json())
      .then((data) => setMessages(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const formatDate = (date) => {
    const dateToFormat = new Date(date);
    const formattedDate =
      dateToFormat.getDate() +
      "-" +
      (dateToFormat.getMonth() + 1) +
      "-" +
      dateToFormat.getFullYear();

    return formattedDate;
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
          {messages.map((message) => {
            return (
              <>
                <tr key={message.id}>
                  <td>{message.firstName}</td>
                  <td>{message.title}</td>
                  <td>{formatDate(message.createdAt)}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
