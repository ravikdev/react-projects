import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
    const [todos,setTodo] = useState([]);
    const handleSubmit = (text) => {
       setTodo([...todos,{id:Date.now,text, completed : false}])
       console.log(todos)
    }
  return (
    <div>
        <input type ='text' onKeyDown={(e) => e.key==='Enter' && handleSubmit(e.value.text)}/>
        <TodoItem/>
    </div>
  )
}

export default TodoList