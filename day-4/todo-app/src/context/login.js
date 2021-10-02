import React from "react";

export const UserContext = React.createContext({
  selectedUser: null,
  userList: [],
  setSelectedUser: () => {},
  user: null,
  login: () => {},
  logout: () => {},
  handleSendNewMessage: () => {},
});
