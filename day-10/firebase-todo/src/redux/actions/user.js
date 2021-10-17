import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
const auth = getAuth();

export const LOGIN = "user/login";
export const LOGIN_SUCCESS = "user/loginSuccess";
export const LOGIN_LOADING = "user/loginLoading";
export const LOGIN_ERROR = "user/loginError";
export const LOGOUT = "user/logout";
export const SIGN_UP = "user/signUp";
export const SIGN_UP_SUCCESS = "user/signUpSuccess";
export const SIGN_UP_LOADING = "user/signUpLoading";
export const SIGN_UP_ERROR = "user/signUpError";

/**
 * {
 *   first_name: 'Batuhan',
 *   last_name: 'xx',
 *   type: 'user/login'
 * }
 */
export const login = (payload) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });

  signInWithEmailAndPassword(auth, payload.email, payload.password)
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { email: response.user.email },
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.code,
      });
    });
};

export const logOut = () => (dispatch) => {
  signOut(auth);
  dispatch({ type: LOGOUT });
};

export const signUp = (payload) => {
  return async (dispatch) => {
    dispatch({ type: SIGN_UP_LOADING });

    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((response) => {
        console.log(response);
        dispatch({ type: SIGN_UP_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: SIGN_UP_ERROR, payload: error.code });
      });
  };
};
