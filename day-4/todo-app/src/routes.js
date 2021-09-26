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
        <Route path="/todo">
          <Todo />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <h1>Sign Up</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
