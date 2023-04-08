import React from "react";

function User(props) {
  return (
    <div>
      {props.user.id} :-
      {props.user.name}
    </div>
  );
}

export default User;
