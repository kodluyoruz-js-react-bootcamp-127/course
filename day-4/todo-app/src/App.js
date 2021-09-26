import React, { useState, useEffect } from "react";
import { UserContext } from "./context/login";
import Routes from "./routes";

function App() {
  const [user, setUser] = useState(null);

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
        login,
        logout,
      }}
    >
      <Routes />
    </UserContext.Provider>
  );
}

export default App;
