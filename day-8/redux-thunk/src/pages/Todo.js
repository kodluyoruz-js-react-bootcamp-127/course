import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import Input from "../components/Input";
import TodoItem from "../components/TodoItem";
import {
  logOut,
  addNewTodo,
  deleteTodo,
  toggleStatusTodo,
} from "../redux/actions";

export default function Todo() {
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
    <div>
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
