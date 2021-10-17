import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
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

function Todo() {
  const [newTodo, setNewTodo] = useState("");

  const { tasks } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Todo Render Oldu");
  }, []);

  useEffect(() => {
    console.log("newTodo state'i veya tasks değişti");
  }, [newTodo, tasks]);

  // useEffect(() => {
  //   console.log("tasks değişti");
  // }, [tasks]);

  const handleDeleteTask = useCallback((id) => dispatch(deleteTodo(id)), []);
  // function handleDeleteTask(id) {
  //   dispatch(deleteTodo(id));
  // }

  const handleToggleTaskComplete = useCallback((id) => {
    dispatch(toggleStatusTodo(id));
  }, []);
  // function handleToggleTaskComplete(id) {
  //   dispatch(toggleStatusTodo(id));
  // }

  const tasksLength = useMemo(() => {
    console.log("task sayısı hesaplandı");
    return tasks.filter((t) => t.status !== "completed").length;
  }, [tasks]);

  const handleAddNewTask = useCallback(() => {
    setNewTodo("");
    dispatch(addNewTodo({ text: newTodo }));
  }, [newTodo]);

  return (
    <div>
      <span>You have {tasksLength} task remaining</span>
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
      <Button text="Ekle" onClick={handleAddNewTask} />
      {/* <Button
        text="Log out"
        onClick={() => {
          dispatch(logOut());
        }}
      /> */}
    </div>
  );
}

export default memo(Todo);
