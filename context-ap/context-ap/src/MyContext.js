import React,{createContext, useState} from 'react';

const MyContext = createContext ();

const MyContextProvider = ({children}) => {
    const [user,setUser] = useState('Intial data');
return(
    <MyContext.Provider value = {{user,setUser}}>
{/* we can access attributes by props.value.name */}
        {children}
    </MyContext.Provider>
);

}

export {MyContext,MyContextProvider}