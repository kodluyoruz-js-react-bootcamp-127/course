import React from "react";
import { UserContext } from "../../../context/login";

export default function UserList() {
  const { userList, selectUser } = React.useContext(UserContext);

  return (
    <div className="user-list">
      {userList.map((item) => {
        return (
          <div
            className="user-list__user"
            onClick={() => selectUser(item.id)}
          >{`${item.first_name} ${item.last_name}`}</div>
        );
      })}
    </div>
  );
}
