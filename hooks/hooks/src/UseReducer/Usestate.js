import React, { useState } from 'react';

function MyComponent() {
  // useState returns an array with two elements: the current state value and a function to update it
  //
  const [count, setCount] = useState(0);

// setcount will get the function which is provided by useState;

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        {/* we Call set count function to update count  */}
        Increment
      </button>
    </div>
  );      
}

//usestate return an array which have a two element currrent state and function to update it.
