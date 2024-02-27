import React, { useState } from 'react';

function MyComponent() {
  const [person, setPerson] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <input type="text" name="name" value={person.name} onChange={handleChange} />
      <input type="text" name="age" value={person.age} onChange={handleChange} />
    </div>
  );
}