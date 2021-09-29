import React, { useState, useEffect } from "react";
import { UserContext } from "./context/login";
import Routes from "./routes";

import "./pages/App.css";
import { useParams } from "react-router";

function App() {
  // const [user, setUser] = useState(null);

  // const login = (username) => {
  //   const user = { username };

  //   setUser(user);
  //   localStorage.setItem("username", JSON.stringify(user));
  // };

  // const logout = () => {
  //   setUser(null);
  //   localStorage.removeItem("username");
  // };

  // useEffect(() => {
  //   const userNameFromStorage = localStorage.getItem("username");

  //   if (userNameFromStorage) {
  //     const userObject = JSON.parse(userNameFromStorage);
  //     console.log(userObject);
  //     setUser(userObject);
  //   }
  // }, []);

  // return (
  //   <UserContext.Provider
  //     value={{
  //       user,
  //       login,
  //       logout,
  //     }}
  //   >
  //     <Routes />
  //   </UserContext.Provider>
  // );

  // const { userid } = useParams();
  const userid = 1;

  return (
    <div className="container">
      <div className="left-side">
        <div className="left-side-item search-user">SearchBar</div>
        <div className="left-side-item user-list">User List</div>
        <div className="left-side-item settings">Settings</div>
      </div>

      <div className="right-side">
        <div className="right-side-item header">
          {/* {selectedFriend.first_name} */}
          Header
        </div>
        <div className="right-side-item message-list">
          {/* {selectedFriend.messages.map(() => {
              return null;
            })} */}
        </div>
        <div className="right-side-item message-form">Message Form</div>
      </div>
    </div>
  );
}

export default App;
