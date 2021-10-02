import { useContext, useState } from "react";
import { Redirect, useLocation, useHistory } from "react-router-dom";

import "./Login.css";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { UserContext } from "../../context/login";

export default function Login() {
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // consume
  const { user, login } = useContext(UserContext);
  const { pathname } = useLocation();

  const handleSubmitLogin = () => {
    login({
      id: Math.random(),
      username,
      firstName,
      lastName,
    });
  };

  if (user && pathname === "/login") return <Redirect to="/chat" />;

  return (
    <div className="login">
      <Input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <Input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <Input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <Button onClick={handleSubmitLogin} text="Login" />
    </div>
  );
}
