// MyContext.js
import React, { createContext, useState } from 'react';

// Create a context with a default value
const MyContext = createContext();

// Create a provider component to wrap your app
const MyContextProvider = ({ children }) => {
  const [myData, setMyData] = useState('Default Data');

  return (
    <MyContext.Provider value={{ myData, setMyData }}> 
    {/* above we value as object*/}
    {/* my provide will save the data */}
      {children}
    </MyContext.Provider>
    
  );
};

export { MyContext, MyContextProvider };