// TodoItem.js
import React from 'react';

const TodoItem = ({ item, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
      />
     {item.text}
    </div>
  );
};
  
export default TodoItem;  