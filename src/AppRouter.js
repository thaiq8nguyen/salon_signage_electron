import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Signage from "./pages/Signage";
const AppRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />;
          <Route path="/signage" component={Signage} />;
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
