import { useContext } from "react";
import { UserContext } from "../context/login";

export default function useLogin() {
  const { user, login, logout } = useContext(UserContext);

  return { user, login, logout };
}
