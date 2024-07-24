import React from 'react';

const TableHeader = ({ label, sortKey, sortConfig, onSort }) => {
  const handleClick = () => {
    if (sortKey) {
      onSort(sortKey);
    }
  };

  const isActiveSort = sortConfig && sortConfig.key === sortKey;
  const sortDirection = isActiveSort ? sortConfig.direction : null;

  return (
    <th onClick={handleClick} style={{ cursor: sortKey ? 'pointer' : 'default' }}>
      {label}
      {isActiveSort && (
        sortDirection === 'ascending' ? ' 🔼' : ' 🔽'
      )}
    </th>
  );
};

export default TableHeader;
