import React, { useState } from 'react';
import './App.css';
import NameList from './NameList';
import NameForm from './NameForms';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [namesList, setNamesList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setNamesList([...namesList, { name, email }]);
      setName('');
      setEmail('');
    }
  };

  const handleAddName = (newName) => {
    setNamesList([...namesList, newName]);
  };

  return (
    <div className="image-background">
      <h1>Lista de Nombres</h1>
      <NameList names={namesList} />
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
    </div>
  );
}

export default App;