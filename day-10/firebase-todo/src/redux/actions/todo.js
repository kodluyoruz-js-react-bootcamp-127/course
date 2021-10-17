import { LOGIN_LOADING } from ".";
import {
  DELETE_TODO,
  NEW_TODO,
  TOGGLE_STATUS_TODO,
  UPDATE_TODO,
} from "../types";

import { collection, addDoc, getFirestore, getDoc } from "firebase/firestore";
const db = getFirestore();

// Action creators

export const addNewTodo = ({ text, status = "not-completed" }) => async (
  dispatch
) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      text,
      status,
      date: new Date(),
    });
    const docSnapshot = await getDoc(docRef);
    const data = docSnapshot.data();
    // dispatch({ type: NEW_TODO, payload: data });
  } catch (err) {
    console.log(err);
    // olumsuz -> err
  }
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
