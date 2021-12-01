import React from "react";
import users from "../../userData/users.json";

const Moderators = () => {
  // Tady budeš muset pro-filtrovat usery a najít jen ty co splňují podmínky pro tento řádek (moderators)
  const filteredUsers = users;
  const resultUsers = filteredUsers.filter((filteredUser) =>
    filteredUser.roles.includes("moderator")
  );
  console.log(resultUsers);

  return (
    <div>
      <h2>Moderators</h2>
      <div className="card">
        {resultUsers.map((resultUsers) => (
          <div className="cardWrap">
            <div style={{ display: "flex" }}>
              <div
                className="avatar"
                style={{
                  backgroundImage: `url(${resultUsers.avatar})`,
                }}
              ></div>
              <div className="textWrap">
                <p>{resultUsers.username}</p>
                <div style={{ display: "flex" }}>
                  {resultUsers.roles.map((role) => 
                    <p style={{ whiteSpace: "nowrap" }}> {role} • </p>
                  )}
                </div>
              </div>
            </div>
            <p>{resultUsers.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moderators;
