import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_ERROR,
  LOGOUT,
  SIGN_UP_SUCCESS,
  SIGN_UP_LOADING,
  SIGN_UP_ERROR,
} from "../actions";

const userState = {
  register: false,
  registerLoading: false,
  registerError: false,

  login: false,
  user: null,
  loginLoading: false,
  loginError: false,
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        register: true,
        registerLoading: false,
        registerError: false,
      };
    case SIGN_UP_LOADING:
      return {
        ...state,
        register: false,
        registerError: false,
        registerLoading: true,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        register: false,
        registerLoading: false,
        registerError: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        login: true,
        loginLoading: false,
        loginError: false,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        login: false,
        loginLoading: true,
        loginError: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        login: false,
        loginLoading: false,
        loginError: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
