import { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";

import useLogin from "../hooks/useLogin";

export default function Login() {
  const { user, login } = useLogin();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { pathname } = useLocation();

  if (user && pathname === "/login") return <Redirect to="/chat" />;

  return (
    <div>
      <input
        type="text"
        name="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        name="first_name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="password"
        name="last_name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          login({
            username,
            firstName,
            lastName,
          });
        }}
      >
        Login
      </button>
    </div>
  );
}
