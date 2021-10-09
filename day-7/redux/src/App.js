import React, { useState } from "react";

import Button from "./components/Button";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import Login from "./pages/Login";

import { useSelector, useDispatch } from "react-redux";
import { DECREMENT, INCREMENT, logOut } from "./redux/actions";
import { addNewTodo, deleteTodo, toggleStatusTodo } from "./redux/actions/todo";

function App() {
  const [newTodo, setNewTodo] = useState("");

  const { tasks } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function handleDeleteTask(id) {
    dispatch(deleteTodo(id));
  }

  function handleToggleTaskComplete(id) {
    dispatch(toggleStatusTodo(id));
  }

  return (
    <div className="app-container">
      <ul style={{ width: "400px" }}>
        {tasks.map((task) => {
          return (
            <TodoItem
              {...task}
              onClick={handleToggleTaskComplete}
              onDelete={handleDeleteTask}
            />
          );
        })}
      </ul>
      <Input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <Button
        text="Ekle"
        onClick={() => {
          setNewTodo("");
          dispatch(addNewTodo({ text: newTodo }));
        }}
      />
      <Button
        text="Log out"
        onClick={() => {
          dispatch(logOut());
        }}
      />
    </div>
  );
}

export default App;

// IIFE - Immediatly Invoked Function Expression
// (function arttır() {
//   console.log("+1");
// })();
