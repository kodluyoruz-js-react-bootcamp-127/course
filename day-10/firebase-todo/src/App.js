import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { withTranslation } from "react-i18next";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./redux/actions";
const auth = getAuth();

function App({ t, i18n }) {
  const { currentUser } = getAuth();
  const { user } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    dispatch({
      type: LOGIN_LOADING,
    });

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { email: auth.currentUser.email },
        });
      } else {
        dispatch({ type: LOGIN_ERROR });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      {user ? <h1>{t("welcome", { username: currentUser.email })}</h1> : null}
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
