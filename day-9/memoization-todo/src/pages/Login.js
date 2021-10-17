import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import { login } from "../redux/actions";

export default function Login({ param1 }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loginLoading, loginError } = useSelector(
    (state) => state.userData
  );

  // const x = ()=>{}
  // const y = ()=>{}
  const handleLogin = useCallback(() => {
    dispatch(
      login({
        email, // email: "" ----> email: "e"
        password, // password: "" ----> değişmeyecek
      })
    );
  }, [email, password]);

  if (loginLoading) return <h1>Loading...</h1>;

  if (user) return <Redirect to="/todo" />;

  return (
    <div>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {loginError ? <p style={{ color: "red" }}>{loginError}</p> : null}
      <Button text="Login" onClick={handleLogin} />
    </div>
  );
}
