    import React, { useState } from 'react'
    
    const TodoForm = () => {
        const [input,setInput] = useState('');
      return (
        <div>
            <form>
            <input type='text' value={input} placeholder='add list' name ='text'/>
            </form>
        </div>
      )
    }
    
    export default TodoForm