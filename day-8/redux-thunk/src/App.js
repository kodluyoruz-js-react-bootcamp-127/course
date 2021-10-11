import React from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

// high order component
import { withTranslation } from "react-i18next";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import { useSelector } from "react-redux";

function App({ t, i18n }) {
  const { user } = useSelector((state) => state.userData);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      {user ? <h1>{t("welcome", { username: user.user.email })}</h1> : null}
      <ul>
        <li
          onClick={() => {
            handleChangeLanguage("tr");
          }}
        >
          🇹🇷Turkish
        </li>
        <li
          onClick={() => {
            handleChangeLanguage("en");
          }}
        >
          🏴󠁧󠁢󠁥󠁮󠁧󠁿English
        </li>
      </ul>
      <div className="app-container">
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// IIFE
export default withTranslation()(App);
