import React, { useState } from 'react';

const NameForm = ({ onAddName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onAddName({ name, email });
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <button type="submit">Agregar Nombre</button>
    </form>
  );
};

export default NameForm;