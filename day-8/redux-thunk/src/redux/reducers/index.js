import { combineReducers } from "redux";

import userReducer from "./user";
import themeReducer from "./theme";
import todoReducer from "./todo";
import counterReducer from "./counter";

const reducers = combineReducers({
  userData: userReducer,
  theme: themeReducer,
  todo: todoReducer,
  counter: counterReducer,
});

export default reducers;

// state.userData.first_name
