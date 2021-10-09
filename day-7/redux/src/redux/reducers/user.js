import { LOGIN, LOGOUT } from "../actions";

const userState = {
  first_name: localStorage.getItem("user")?.first_name || "",
  last_name: "",
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        first_name: action.first_name,
        last_name: action.last_name,
      };
    case LOGOUT:
      return {
        ...state,
        first_name: "",
        last_name: "",
      };
    default:
      return state;
  }
};

export default userReducer;
