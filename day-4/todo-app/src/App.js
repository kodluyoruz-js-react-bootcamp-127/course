import React, { useState, useEffect } from "react";
import { UserContext } from "./context/login";
import Routes from "./routes";

import mockUserList from "./mock-users.json";

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userList, setUserList] = useState(mockUserList.users);

  const login = (user) => {
    setUser(user);
    localStorage.setItem("chat_app_user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("chat_app_user");
  };

  const handleSetSelectedUser = (userId) => {
    const user = userList.find((u) => u.id === userId);
    if (user) setSelectedUser(user);
  };

  const handleSendNewMessage = (messageText) => {
    const newSelectedUser = {
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        {
          id: Math.random(),
          text: messageText,
          sender: user.id,
        },
      ],
    };

    setSelectedUser(newSelectedUser);

    const newUserList = userList.map((u) => {
      if (u.id === selectedUser.id) return newSelectedUser;
      else return u;
    });

    setUserList(newUserList);

    localStorage.setItem(
      `chat_app_user_list_${user.id}`,
      JSON.stringify(newUserList)
    );
  };

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem("chat_app_user");

    if (userNameFromStorage) {
      const userObject = JSON.parse(userNameFromStorage);
      setUser(userObject);
    }

    const userListFromStorage = localStorage.getItem("chat_app_user_list");
    if (userListFromStorage) {
      const users = JSON.parse(userListFromStorage);
      setUserList(users);
    }
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          selectedUser,
          setSelectedUser: handleSetSelectedUser,
          userList,
          login,
          logout,
          handleSendNewMessage,
        }}
      >
        <Routes />
      </UserContext.Provider>
    </>
  );
}

export default App;
