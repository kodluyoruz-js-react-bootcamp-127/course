import React, { useContext } from "react";

import { UserContext } from "../../../../context/login";

export default function Header() {
  const { selectedUser } = useContext(UserContext);

  if (!selectedUser) return null;

  return <div>{`${selectedUser.first_name} ${selectedUser.last_name}`}</div>;
}
