import React, { useContext } from "react";

import Button from "../../../../components/Button";
import { UserContext } from "../../../../context/login";

export default function Settings() {
  const { logout } = useContext(UserContext);

  return (
    <div>
      <Button text="Log Out" onClick={logout} />
    </div>
  );
}
