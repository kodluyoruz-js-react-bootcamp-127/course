import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import { signUp } from "../redux/actions";
import { useTranslation } from "react-i18next";
import firebaseErrorMessage from "../utils/firebaseErrorMessage";

export default function SignUp() {
  const { t: translate } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, registerLoading, registerError } = useSelector(
    (state) => state.userData
  );

  if (registerLoading) return <h1>Loading..</h1>;

  if (register) return <Redirect to="/login" />;

  return (
    <div>
      <Input
        type="email"
        placeholder={translate("input.placeholders.email")}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        type="password"
        placeholder={translate("input.placeholders.password")}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {registerError ? (
        <p style={{ color: "red" }}>
          {firebaseErrorMessage(registerError, translate)}
        </p>
      ) : null}
      <Button
        text={translate("buttons.signUp")}
        onClick={() => {
          dispatch(
            signUp({
              email,
              password,
            })
          );
        }}
      />
    </div>
  );
}
