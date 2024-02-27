// //File 1
// import React, { useState,createContext} from 'react'
// const UserContext = createContext() 
// const Contexthook1 = () => {
//   const [user,setUser] =useState('Ravi');

//   return (
//     <div>Contexthook1

//     <UserContext.Provider value={user}>
//     <h1>{`Hello ${setUser}! ` } </h1>

//     </UserContext.Provider>

//     </div>
//   )
// }

// export default {Contexthook1,UserContext}

import React, { useState, createContext} from 'react';

const UserContext = createContext();

const Contexthook1 = ({children}) => {
  const [user, setUser] = useState('Ravi');  
  return (
    <div>
      Contexthook1
      <UserContext.Provider value={{user,setUser}}>
        <h1>{`Hello ${user}!`}</h1>
        <h2>{children}</h2>
      </UserContext.Provider>
    </div>
  );
};

export  {Contexthook1,UserContext};


