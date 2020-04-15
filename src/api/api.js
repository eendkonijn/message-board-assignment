import fetch from "node-fetch";

export const getMessagesList = (limit) => {
  return fetch("http://localhost:3000/messages?limit=" + limit)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};
