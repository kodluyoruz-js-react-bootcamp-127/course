import React from "react";

export const TodoContext = React.createContext({
  list: [],
  addNewTodo: () => {},
  removeTodo: (text) => {},
});
