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

  fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then(async (response) => {
    const data = await response.json();

    dispatch({
      type: response.ok ? LOGIN_SUCCESS : LOGIN_ERROR,
      payload: data,
    });
  });
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};

export const signUp = (payload) => {
  return async (dispatch) => {
    dispatch({ type: SIGN_UP_LOADING });

    fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(res);
          }, 2000);
        });
      })
      .then(async (res) => {
        const data = await res.json();

        if (res.ok) {
          dispatch({ type: SIGN_UP_SUCCESS });
        } else {
          dispatch({ type: SIGN_UP_ERROR, payload: data });
        }
      });
  };
};
