import React from "react";

export const UserContext = React.createContext({
  user: null,
  userList: [],
  login: () => {},
  logout: () => {},
});
