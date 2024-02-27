import React, { useReducer } from "react";

const intailState = {
count:0
};

const reducer = (state,action)=>{
switch(action.type){
    case 'INCREMENT' : {
        return {count:state.count +1} 
        //return is brackets because we returning objects
        // So, the line return { count: state.count + 1 }; is sending the new state 
        // to the useReducer hook, and it becomes the updated state for the component.
    }

    case 'DECREMENT' : {
        return {count:state.count - 1} 
        //This will return to reducer function which is present in hook 
        // and that hook update the state.
    }

    default :{
        return state;
    }
}
}

const ReducerPractice = () => {

    const [state,dispatch] = useReducer(reducer,intailState);

  return (
    <div>
        <p>State: {state.count}</p>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>INCEREMENT</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
  )
}

export default ReducerPractice