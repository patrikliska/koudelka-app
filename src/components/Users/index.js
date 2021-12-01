import React from 'react';
import users from '../../userData/users.json';

const Users = () => (
  <div>
    <h2>Users</h2>
    {users.map((user) => (
      <p>{user.username}</p>
    ))}
  </div>
);

export default Users;
