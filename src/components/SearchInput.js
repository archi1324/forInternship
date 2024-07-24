import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Поиск..."
        style={{ width: '80%', padding: '8px' }}
      />
      <button onClick={handleSearch} style={{ padding: '8px 16px', marginLeft: '10px' }}>
        Поиск
      </button>
    </div>
  );
};

export default SearchInput;
