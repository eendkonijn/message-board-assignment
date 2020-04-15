import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "core-js/stable";
import "regenerator-runtime/runtime";
import reducer from "./store/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
