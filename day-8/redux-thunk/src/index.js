import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import App from "./AppClass";
import "./i18next";

import { Provider } from "react-redux";

import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    {/* <UserContext.Provider value={{...}}> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
