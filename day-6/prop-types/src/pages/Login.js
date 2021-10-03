import { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";

import useLogin from "../hooks/useLogin";

export default function Login() {
  const { user, login } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { pathname } = useLocation();

  if (user && pathname === "/login") return <Redirect to="/todo" />;

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          login(username);
        }}
      >
        Login
      </button>
    </div>
  );
}
