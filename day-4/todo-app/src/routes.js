import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import useLogin from "./hooks/useLogin";
import Login from "./pages/Login";
import Todo from "./pages/Todo";

function Routes() {
  // truthy ({}, [], 123, "lsdf") -falsy (null)
  const { user, logout } = useLogin();

  return (
    <Router>
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <button onClick={logout}>Log out</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>

      <Switch>
        <Route path="/">
          {/* {check user} */}
          {/* if user <Redirect to="/chat" /> */}
          {/* else <Redirect to="/login" /> */}
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/chat">{/* <Chat /> */}</Route>
        <Route path="/chat/:userid">{/* <UserDetails /> */}</Route>
      </Switch>
    </Router>
  );
}

export default Routes;
