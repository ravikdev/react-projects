// if you want to perform some action or store a
//  value that doesn't need to trigger re-renders, you can use useRef:
import React, { useRef, useState } from 'react';

function RefCounter() {
  const [count, setCount] = useState(0);
  const nonReactiveValue = useRef(0);

  const increment = () => {
    setCount(count + 1);
    nonReactiveValue.current = count + 1; // Update the non-reactive value
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Non-Reactive Value: {nonReactiveValue.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default RefCounter;