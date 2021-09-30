import React, { useState, useEffect, useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";

import AddNewTodo from "../components/AddNewTodo";
import TodoList from "../components/TodoList";
import { TodoContext } from "../context/todo";

import uuid from "uuid";
import useLogin from "../hooks/useLogin";
import { UserContext } from "../context/login";

// Stateless
// Hooks
function Chat() {
  return (
    <div>
      <div className="left-side">
        <div className="search-users"></div>
        <div className="users"></div>
        <div className="settings"></div>
      </div>
      <div className="right-side">
        <div className="user-header"></div>
        <div className="messages"></div>
        <div className="message-input"></div>
      </div>
    </div>
  );
}

export default Chat;
