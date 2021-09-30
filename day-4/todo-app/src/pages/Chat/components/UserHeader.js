import React from "react";
import { UserContext } from "../../../context/login";

export default function UserHeader() {
  const { selectedUser } = React.useContext(UserContext);

  if (!selectedUser) return null;

  return <div>{`${selectedUser.first_name} ${selectedUser.last_name}`}</div>;
}
