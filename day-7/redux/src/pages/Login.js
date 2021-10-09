import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import { LOGIN, login } from "../redux/actions";

export default function Login() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const { pathname } = useLocation();

  // if (user && pathname === "/login") return <Redirect to="/todo" />;

  return (
    <div>
      <Input
        type="text"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <Input
        type="text"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <Button
        text="Login"
        onClick={() => {
          dispatch(
            login({
              first_name: firstName,
              last_name: lastName,
            })
          );
        }}
      />
    </div>
  );
}
