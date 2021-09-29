import React from "react";

// import MockUserList from "../../../../mock-users.json";

export const UserContext = React.createContext({
  user: null,
  friendList: [],
  selectedFriend: null,
  onSelectFriend: () => {},
  login: () => {},
  logout: () => {},
});
