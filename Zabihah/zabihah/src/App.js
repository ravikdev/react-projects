import React, { useState } from 'react';
import AnotherPageComponent from './AnotherPageComponent'; // Import the component for the other page

import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle the click event
  const onClickHandle = () => {
    setIsClicked(true);
  };
  return (
    <div className="App">
        {/* Render text with onClick event */}
        <p onClick={onClickHandle}>Click Me!</p>

      {/* Conditionally render the other page/component */}
      {isClicked && <AnotherPageComponent  />}
    </div>
  );
}

export default App;
