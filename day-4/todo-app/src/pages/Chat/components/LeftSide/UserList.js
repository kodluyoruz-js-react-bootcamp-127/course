import React, { useContext } from "react";

import { UserContext } from "../../../../context/login";

export default function UserList({ searchText }) {
  const { userList, setSelectedUser } = useContext(UserContext);

  const filteredUserList = userList.filter((u) =>
    `${u.username}${u.first_name}${u.last_name}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className="user-list">
      {filteredUserList.map((user) => {
        return (
          <div
            className="user"
            onClick={() => {
              setSelectedUser(user.id);
            }}
          >
            {`${user.first_name} ${user.last_name}`}
          </div>
        );
      })}
    </div>
  );
}
