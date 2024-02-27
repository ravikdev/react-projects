const MyComponent = () => {
    const handleClick = (e) => {
      // 'e' is the event object
      console.log('Clicked!', e);
    };
  
    return (
      <button onClick={handleClick} value={name} na>
        Click me
      </button>
    );
  };
  
  export default MyComponent;