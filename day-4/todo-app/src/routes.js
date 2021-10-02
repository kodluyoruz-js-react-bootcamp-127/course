import React from "react";
import {
  HashRouter,
  Redirect,
  Link,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";

import Login from "./pages/Login";
import Chat from "./pages/Chat";

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Routes;
