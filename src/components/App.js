import React from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Router>
      <Link to="/">
        <Button variant="primary">
          Message Board: you have 0 new messages
        </Button>
      </Link>
      <Link to="/bla">
        <Button variant="primary">Redirect test</Button>
      </Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bla">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
