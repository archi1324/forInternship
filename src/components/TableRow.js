import React from 'react';

const TableRow = ({ user, onClick }) => {
  return (
    <tr onClick={onClick} style={{ cursor: 'pointer' }}>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.phone}</td>
      <td>{user.address.city}, {user.address.street}</td>
    </tr>
  );
};

export default TableRow;
