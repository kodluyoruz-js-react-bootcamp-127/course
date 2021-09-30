import React from "react";

import { UserContext } from "../../../context/login";

export default function Messages() {
  const { selectedUser } = React.useContext(UserContext);

  return (
    <div className="messages">
      {selectedUser
        ? selectedUser.messages.map((message) => {
            return <div>{message.text}</div>;
          })
        : null}
    </div>
  );
}
