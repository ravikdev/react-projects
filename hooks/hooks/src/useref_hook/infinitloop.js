import React, { useState, useEffect } from 'react';

function InfiniteLoopExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Render count: {count}</p>
    </div>
  );
}

export default InfiniteLoopExample;