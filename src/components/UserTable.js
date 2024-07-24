import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const UserTable = ({ users, onRowClick }) => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  const sortedUsers = React.useMemo(() => {
    if (sortConfig.key) {
      return [...users].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return users;
  }, [users, sortConfig]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <TableHeader
            label="ФИО"
            sortKey="name"
            sortConfig={sortConfig}
            onSort={handleSort}
          />
          <TableHeader
            label="Возраст"
            sortKey="age"
            sortConfig={sortConfig}
            onSort={handleSort}
          />
          <TableHeader
            label="Пол"
            sortKey="gender"
            sortConfig={sortConfig}
            onSort={handleSort}
          />
          <TableHeader
            label="Номер телефона"
          />
          <TableHeader
            label="Адрес"
            sortKey="address"
            sortConfig={sortConfig}
            onSort={handleSort}
          />
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map(user => (
          <TableRow key={user.id} user={user} onClick={() => onRowClick(user)} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
