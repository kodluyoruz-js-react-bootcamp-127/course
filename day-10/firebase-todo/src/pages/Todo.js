import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import TodoItem from "../components/TodoItem";
import {
  logOut,
  addNewTodo,
  deleteTodo,
  toggleStatusTodo,
} from "../redux/actions";

import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { Redirect } from "react-router";
const db = getFirestore();

// mount edilmek
// unmount

// const notCompletedQuery = query(collection(db, "todos"), where("status", "==", "not-completed"));
const todosCollection = collection(db, "todos");

function Todo() {
  const { user } = useSelector((state) => state.userData);
  const [newTodo, setNewTodo] = useState("");
  const [taskList, setTaskList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // const button = document.getElementById("clickButton");
    // button.addEventListener("click", () => {
    //   window.location.href = "/#/login";
    // });
    // button.addEventListener("mouseenter", () => {
    //   console.log("mouse hover!!!");
    // });

    const unsubscibe = onSnapshot(collection(db, "todos"), (querySnapshot) => {
      let todos = [];
      querySnapshot.forEach((qs) => {
        todos.push(qs.data());
      });
      setTaskList(todos);
    });

    // const unsubsAuth = onAuthStateChanged(auth, (user) => {});

    // we should return a function if we have something to disconnect (unmount)
    return () => {
      unsubscibe();
      // unsubsAuth();
      // button.removeEventListener("click", () => {});
      // button.removeEventListener("mouseenter", () => {});
      console.log("todo unmounted!! ->> todo artık ekranda yok");
    };
  }, []);

  // const { tasks } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDeleteTask = useCallback((id) => dispatch(deleteTodo(id)), []);

  const handleToggleTaskComplete = useCallback((id) => {
    dispatch(toggleStatusTodo(id));
  }, []);

  const tasksLength = useMemo(() => {
    return taskList.filter((t) => t.status !== "completed").length;
  }, [taskList]);

  const handleAddNewTask = useCallback(() => {
    setNewTodo("");
    dispatch(addNewTodo({ text: newTodo }));
  }, [newTodo]);

  if (!user) return <Redirect to="/login" />;

  return (
    <div>
      <span>You have {tasksLength} task remaining</span>
      <ul style={{ margin: 0, padding: 0, maxHeight: 300, overflow: "auto" }}>
        {taskList.map((task) => {
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
      <Button
        text="Log out"
        onClick={() => {
          dispatch(logOut());
        }}
      />
    </div>
  );
}

export default memo(Todo);
