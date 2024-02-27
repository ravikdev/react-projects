import React, { useState } from 'react'

export const ContextHookPractice = () => {
    const [user,setUser] =useState('Ravi')
  return (
    <div> 
        <p>Hi{user}</p>
        <OtherComponent user={user}/>
    </div>
  )
}

export const OtherComponent =(user) =>{
return(
    <div>
        <p>Hi{user}</p>
    </div>
)

}

