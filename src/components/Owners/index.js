import React from 'react';
import users from "../../userData/users.json";

const Owners = () => {
  const filteredOwners = users;
  const resultOwners = filteredOwners.filter(filteredOwner => filteredOwner.roles.includes("owner"))

  return (
    <div>
      <h2>Owners</h2>
      <div className="card">
        {resultOwners.map((resultOwners) => (
          <div className="cardWrap">
            <div style={{ display: "flex" }}>
            <div
              className="avatar"
              style={{
                backgroundImage: `url(${resultOwners.avatar})`,
              }}
            ></div>
            <div className="textWrap">
              <p>{resultOwners.username}</p>
              <div style={{ display: "flex" }}>
                {resultOwners.roles.map((role) => {
                  return <p style={{ whiteSpace: "nowrap" }}> {role} • </p>;
                })}
              </div>
            </div>
          </div>
          <p>{resultOwners.bio}</p>
          </div>
        ))}
      </div>
    </div>

  )
};

export default Owners;
