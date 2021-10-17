import { TOGGLE_THEME } from "../actions";

const themeState = {
  theme: "",
};

const themeReducer = (state = themeState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default themeReducer;
