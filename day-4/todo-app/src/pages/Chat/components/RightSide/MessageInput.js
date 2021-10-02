import React, { useContext, useState } from "react";

import { UserContext } from "../../../../context/login";
import { Button, Input } from "../../../../components";

export default function MessageInput() {
  const { handleSendNewMessage } = useContext(UserContext);
  const [message, setMessage] = useState("");

  return (
    <div className="message-input-container">
      <Input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Send new message..."
      />
      <Button
        text="Send"
        onClick={() => {
          handleSendNewMessage(message);
          setMessage("");
        }}
      />
    </div>
  );
}
