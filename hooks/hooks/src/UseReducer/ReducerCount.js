import React, { useReducer } from 'react';

const initialState = { count: 0 };
//State is object that's why we taking object
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
      // We accessing it from state you defined and passed with count.
      // After the new state obejct is returned  this code will change the state again const [state, dispatch] = useReducer(reducer, initialState);
 
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ReducerCount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //useReducer return an array which will be stored in state and dispatch ,use reducer will
  // return current state object(remember this) and dispatch function.

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      {/* dispatch will pass current state object and action object too*/}
      {/*dispatch and reducer connected by this const [state, dispatch] = useReducer(reducer, initialState); */}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default ReducerCount;