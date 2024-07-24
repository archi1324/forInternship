import React from 'react';

const Modal = ({ user, onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '80%',
        maxWidth: '500px'
      }}>
        <h2>{user.name}</h2>
        <p>Возраст: {user.age}</p>
        <p>Адрес: {user.address.city}, {user.address.street}</p>
        <p>Рост: {user.height}</p>
        <p>Вес: {user.weight}</p>
        <p>Номер телефона: {user.phone}</p>
        <p>Email: {user.email}</p>
        <button onClick={onClose} style={{ marginTop: '20px', padding: '8px 16px' }}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
