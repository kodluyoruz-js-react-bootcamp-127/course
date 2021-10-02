import React, { useState, useContext } from "react";

import SearchInput from "./components/LeftSide/SearchInput";
import Settings from "./components/LeftSide/Settings";
import UserList from "./components/LeftSide/UserList";
import Header from "./components/RightSide/Header";
import MessageInput from "./components/RightSide/MessageInput";
import Messages from "./components/RightSide/Messages";

import "./Chat.css";
import { UserContext } from "../../context/login";
import { Redirect } from "react-router";

export default function Chat() {
  const { user } = useContext(UserContext);
  const [search, setSearch] = useState("");

  if (!user) return <Redirect to="/login" />;

  return (
    <div className="chat">
      <div className="left-side">
        <SearchInput searchText={search} handleOnChange={setSearch} />
        <UserList searchText={search} />
        <Settings />
      </div>
      <div className="right-side">
        <Header />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
}
