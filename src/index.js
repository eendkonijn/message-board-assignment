import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "core-js/stable";
import "regenerator-runtime/runtime";
import reducer from "./store/reducer";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
