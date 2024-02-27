import React, { useState } from 'react'
import Component2 from './component2.js'
const Component1 = () => {
  const [user,setUser] = useState('Ravi')
  return (
    <div>
      <h1>Component1</h1> 
      <Component2 user={user}/>
    </div>
  )
}

export default Component1