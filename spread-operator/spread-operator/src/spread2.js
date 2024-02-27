import React from 'react'

const spread2 = () => {
const [items, setItems] = useState([1, 2, 3]);
const newItem = 4;

// To update the state while keeping the original array unchanged
setItems([...items, newItem]);
console.log(items);
// Output: [1, 2, 3] (original state is unchanged)

// After the state is updated
console.log([...items, newItem]);
// Output: [1, 2, 3, 4] (new array with the updated state)
  return (
    <div>spread2</div>
  )
}


export default spread2
