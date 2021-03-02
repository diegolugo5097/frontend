import React from "react";
import { useSelector } from "react-redux";
import User from "./User/user.js";

const Users = ({ setCurrentId }) => {
  const users = useSelector((state) => state.users);
  return !users.length ? (
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  ) : (
    <div> 
      {users.map((user) => {
        return <User user={user} setCurrentId={setCurrentId} />;
      })}
    </div>
  );
};

export default Users;
 