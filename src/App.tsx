import React from "react";
import Chat from "./component/chat/chat";
import Login from "./component/login/login";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Container maxWidth="sm">
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/chat" component={Chat} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
};

export default App;
