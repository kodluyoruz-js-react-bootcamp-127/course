import React, { useState, useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";

import AddNewTodo from "../components/AddNewTodo";
import TodoList from "../components/TodoList";
import { TodoContext } from "../context/todo";

import uuid from "uuid";
import useLogin from "../hooks/useLogin";

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

  const { user, selectedUser } = useLogin();
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
      <h1>{selectedUser.firstName}</h1>
      <AddNewTodo />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default Todo;
