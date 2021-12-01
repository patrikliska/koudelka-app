import React from "react";
import users from "../../userData/users.json";

const Users = () => (
  <div>
    <h2>Users</h2>
    <div className="card">
      {users.map((user) => (
        <div className="cardWrap">
          <div style={{ display: "flex" }}>
            <div
              className="avatar"
              style={{
                backgroundImage: `url(${user.avatar})`,
              }}
            ></div>
            <div className="textWrap">
              <p>{user.username}</p>
              <div style={{ display: "flex" }}>
                {user.roles.map((role) => {
                  return <p style={{ whiteSpace: "nowrap" }}> {role} • </p>;
                })}
              </div>
            </div>
          </div>
          <p>{user.bio}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Users;
