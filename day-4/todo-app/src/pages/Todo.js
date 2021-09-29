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
function Todo() {
  const [todoState, setTodoState] = useState({
    list: [],
  });

  const addNewTodo = (text) => {
    setTodoState({
      list: [...todoState.list, { text, id: uuid.v4() }],
    });
  };

  const removeTodo = (id) => {
    setTodoState({
      list: todoState.list.filter((item) => item.id !== id),
    });
  };

  useEffect(() => {
    // fetch
  }, []);

  useEffect(() => {
    console.log("todoState degisti");

    // dependency
  }, [todoState]);

  const { user } = useLogin();
  const { pathname } = useLocation();

  if (!user && pathname === "/todo") return <Redirect to="/login" />;

  return (
    <TodoContext.Provider
      value={{
        list: todoState.list,
        addNewTodo,
        removeTodo,
      }}
    >
      <AddNewTodo />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default Todo;
