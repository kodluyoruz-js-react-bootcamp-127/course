import {
  DELETE_TODO,
  NEW_TODO,
  TOGGLE_STATUS_TODO,
  UPDATE_TODO,
} from "../types";

// Action creators

export const addNewTodo = ({ text, status = "not-completed" }) => {
  return {
    type: NEW_TODO,
    payload: {
      text,
      status,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

export const toggleStatusTodo = (id) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload: {
      id,
    },
  };
};

// {type: 'todo/updateTodo',
// id: 'ljsafjlkasdf',
// text: 'guncellediğimiz text'
// }

export const updateTodo = ({ id, text }) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      text,
    },
  };
};
