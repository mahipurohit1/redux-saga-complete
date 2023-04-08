import React from "react";
import User from "./User";

function UserList(props) {
  console.log(props.users);
  return (
    <div>
      {props.users.map((user) => {
        return <User user={user}></User>;
      })}
    </div>
  );
}

export default UserList;
