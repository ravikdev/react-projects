// TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  
  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  return (
    <div>
      <h1>Todo List</h1>
        <input type="text" placeholder="Add Todo" onKeyDown={(e) => e.key === 'Enter' && handleAddTodo(e.target.value)} />
      {todos.map(todo => (        
        <TodoItem item={todo} onToggle={handleToggle} />
      ))}
    </div>
  );
};

export default TodoList;