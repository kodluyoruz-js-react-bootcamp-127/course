import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { TodoContext } from "../../context/todo";
import useTodo from "../../hooks/useTodo";

function AddNewTodo() {
  // custom hook
  const { addNewTodo } = useTodo();

  // useState
  const [todoText, setTodoText] = useState("");
  // useContext
  // const { addNewTodo } = useContext(TodoContext);

  return (
    <div>
      <TextField
        size="small"
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
      />
      <Button
        variant="text"
        onClick={() => {
          addNewTodo(todoText);
        }}
      >
        Add
      </Button>
    </div>
  );
}

export default AddNewTodo;
