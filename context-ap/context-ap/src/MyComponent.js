import React,{useContext} from 'react';
import { MyContext } from "./MyContext";


const MyComponent = () => {
    const {user,setUser} = useContext(MyContext)
    // we are doing     

    const handleClick = () =>{
        setUser('new user');
    }
  return (
    <div>
        <p>{user}</p>
        <button onClick={handleClick}> Click here</button>
    </div>
  )
}

export default MyComponent  