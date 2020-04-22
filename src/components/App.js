import React from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import DetailView from "./DetailView";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={DetailView} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
