import React from 'react';
import users from '../../userData/users.json';

const Moderators = () => {
  // Tady budeš muset pro-filtrovat usery a najít jen ty co splňují podmínky pro tento řádek (moderators)
  const filteredUsers = users;

  return (
    <div>
      <h2>Moderators</h2>
    </div>
  );
};

export default Moderators;
