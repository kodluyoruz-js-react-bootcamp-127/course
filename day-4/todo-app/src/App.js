import React, { useState, useEffect } from "react";
import { UserContext } from "./context/login";
import Routes from "./routes";

import mockUsers from "./mock-users.json";

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = (userId) => {
    const user = mockUsers.users.find((user) => user.id === userId);
    setSelectedUser(user);
    // listeden userId'li kullanıcıyı bul
    // kullanıcıyı selectedUser state'ine ata
  };

  const login = (username) => {
    const user = { username };

    setUser(user);
    localStorage.setItem("username", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("username");
  };

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem("username");

    if (userNameFromStorage) {
      const userObject = JSON.parse(userNameFromStorage);
      console.log(userObject);
      setUser(userObject);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        userList: mockUsers.users,
        selectedUser,
        login,
        logout,
        selectUser,
      }}
    >
      <Routes />
    </UserContext.Provider>
  );
}

export default App;
