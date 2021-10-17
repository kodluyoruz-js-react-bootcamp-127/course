import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import { login } from "../redux/actions";
import firebaseErrorMessage from "../utils/firebaseErrorMessage";
import { useTranslation } from "react-i18next";

export default function Login({ param1 }) {
  const { t: translate } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("enesozturk.d@gmail.com");
  const [password, setPassword] = useState("kodluyoruz12345");
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
  }, [email, dispatch, password]);

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
      {loginError ? (
        <p style={{ color: "red" }}>
          {firebaseErrorMessage(loginError, translate)}
        </p>
      ) : null}
      <Button text="Login" onClick={handleLogin} />
    </div>
  );
}
