import { useState } from "react";
const MyComponent = () => {
    const [data, setData] = useState({ value: 42 ,name :'ravi'});
  
    const updateData = () => {
      const newData = { ...data, value: data.value + 1, updated: true };
      setData(newData);
    };
  
    return (
      <div>
        <p>Current Value: {JSON.stringify(data)}</p>
        <button onClick={updateData}>Update Data</button>
      </div>
    );
  };

  export default MyComponent    