import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../Router/Auth";
import Feed from "../Router/Feed";

interface IGlobalRouter {
  isLoggedIn?: boolean;
}
//
const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
);
const LoggedOutRoutes = () => (
  <>
    <Route path="/" component={Auth} />
  </>
);

const GlobalRouter: React.FC<IGlobalRouter> = ({ isLoggedIn = false }) => (
  <Router>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </Router>
);

export default GlobalRouter;
