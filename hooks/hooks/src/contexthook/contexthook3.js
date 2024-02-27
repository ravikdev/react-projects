// //File 2
// import React ,{useState, useContext} from 'react'
// import ReactDOM from "react-dom/client";
// import {UserContext} from './contexthook1';
// const Contexthook3 = () => {
//     const user =useContext(UserContext);
//   return (

//     <div>Contexthook3
//              <h2>{`Hello ${user} again!`}</h2>
//     </div>
//   )
// }

// export default Contexthook3




import React, { useContext } from 'react';
// import Contexthook1 from './contexthook1';
import { UserContext } from './contexthook1.js';

const Contexthook3 = () => {
  const {user,setUser} = useContext(UserContext);

  return (
    <div>
      Contexthook3
      <h2>{`Hello ${user} from Contexthook3!`}</h2>
    </div>
  );
};

export default Contexthook3;
