import React, { useContext } from "react";
import { UserContext } from "../../../../context/login";

export default function Messages() {
  const { user, selectedUser } = useContext(UserContext);

  return (
    <div className="messages">
      {selectedUser?.messages.map((message) => {
        return (
          <div
            className={`message-container ${
              message.sender !== user.id ? "from-them" : ""
            }`}
          >
            <div className="message">{message.text}</div>
          </div>
        );
      })}
    </div>
  );
}
