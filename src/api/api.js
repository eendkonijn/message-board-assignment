import fetch from "node-fetch";

export const getData = (limit) => {
  return fetch("http://localhost:3000/messages?limit=" + limit)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};
