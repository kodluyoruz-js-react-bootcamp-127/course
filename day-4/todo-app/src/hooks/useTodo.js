import { useContext, useEffect } from "react";
import { TodoContext } from "../context/todo";

function useTodo() {
  const { list, removeTodo, addNewTodo } = useContext(TodoContext);

  return { list, addNewTodo, removeTodo };
}

export default useTodo;
