export const LOGIN = "user/login";
export const LOGOUT = "user/logout";

/**
 * {
 *   first_name: 'Batuhan',
 *   last_name: 'xx',
 *   type: 'user/login'
 * }
 */
export const login = (payload) => {
  return {
    type: LOGIN,
    ...payload,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};
