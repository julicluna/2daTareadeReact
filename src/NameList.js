import React from 'react';

const NameList = ({ names }) => (
  <ul>
    {names.map((item, index) => (
      <li key={index}>
        <strong>{item.name}</strong> - {item.email}
      </li>
    ))}
  </ul>
);

export default NameList;