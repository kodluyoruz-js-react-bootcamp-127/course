import { useContext } from "react";
import { UserContext } from "../context/login";

export default function useLogin() {
  const { user, selectedUser, login, logout } = useContext(UserContext);

  return { user, selectedUser, login, logout };
}
