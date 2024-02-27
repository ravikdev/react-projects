// MyComponent.js
import React, { useContext } from 'react';
import  {MyContext}  from './MyContext';

const MyComponent = () => {
  // Access the context using useContext
  const { myData, setMyData } = useContext(MyContext);

  const handleButtonClick = () => {
    // Update the context data
    setMyData('New Data'); 
  };

  return (
    <div>
      <p>Context Data: {myData}</p>
      <button onClick={handleButtonClick} >Update Data</button>
    </div>
  );
};

export default MyComponent;