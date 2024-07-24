import React, { useState, useEffect } from 'react';
import UserTable from './components/UserTable';
import SearchInput from './components/SearchInput';
import Modal from './components/Modal';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        const usersWithFullName = data.users.map(user => ({
          ...user,
          name: `${user.firstName} ${user.lastName}`
        }));
        setUsers(usersWithFullName);
        setFilteredUsers(usersWithFullName);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleSearch = (query) => {
    fetch(`https://dummyjson.com/users/search?q=${query}`)
      .then(response => response.json())
      .then(data => {
        const usersWithFullName = data.users.map(user => ({
          ...user,
          name: `${user.firstName} ${user.lastName}`
        }));
        setFilteredUsers(usersWithFullName);
      })
      .catch(error => console.error('Error filtering users:', error));
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <SearchInput onSearch={handleSearch} />
      <UserTable users={filteredUsers} onRowClick={handleRowClick} />
      {modalVisible && selectedUser && <Modal user={selectedUser} onClose={closeModal} />}
    </div>
  );
};

export default App;
