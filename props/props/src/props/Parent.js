import React from 'react';
import ChildComponent from './child.js';
// you can pass data from a parent component to a child component using props (short for properties). 
function ParentComponent() {
  const message = "Hello from Parent Component";

  return (
    <div>
      <h1>Parent</h1>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;