import { v4 } from "uuid";
import {
  DELETE_TODO,
  NEW_TODO,
  TOGGLE_STATUS_TODO,
  UPDATE_TODO,
} from "../types";

const todoState = {
  tasks: [
    {
      id: 1,
      text: "Do homework",
      status: "completed",
    },
    {
      id: 2,
      text: "Drink water",
      status: "completed",
    },
  ],
};

const todoReducer = (state = todoState, action) => {
  switch (action.type) {
    case NEW_TODO:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: v4(),
            ...action.payload,
          },
        ],
      };
    case UPDATE_TODO:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id)
            return {
              ...task,
              text: action.payload.text,
            };
          else return task;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              status:
                task.status === "completed" ? "not-completed" : "completed",
            };
          } else return task;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
