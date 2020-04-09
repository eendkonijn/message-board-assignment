import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
