import React,{useState} from "react";
function Toggle() {
    const [isToggled, setToggle] = useState(false);
  
    const toggleButton = () => {
      setToggle(!isToggled);
    };
  
    return (
      <div>
        <h1>Toggle Switch</h1>
        <button onClick={toggleButton}>
          {isToggled ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
  export default Toggle