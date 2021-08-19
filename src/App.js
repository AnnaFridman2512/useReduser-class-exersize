
import './App.css';
import React, {useReducer} from 'react';

//6.Setting all types in one variable
const ACTIONS = {
    DECREMENT: 'decrement',
    INCREMENT : 'increment'
}


//4.Define the "reducer" function. It should know how to update the "state" acordinly, depending on the request that it got, and return the changed state
function reducer(state, action) {//The "action" we got from step 5 {type: "decrement"} or
  switch (action.type) {//switch case by the action.type thats or "decrement" or "increment"
    case ACTIONS.INCREMENT://"increment"
      return {count: state.count + 1};// Will retrun the state +1 
    case ACTIONS.DECREMENT:
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}


function App() {
//2.Define useReducer with the states you want to manage
  const [state, dispatch] = useReducer(reducer, {count:0});//const [state, dispatch] = useReducer(reducer, {count:0} is-initialState)
                                                        //"dispatch" function is like "setCount"
                                                      // const  [count, setCount] = useState(0);
                                                    //The "initialState" is an object that contains all the states - in our case it's only one 
                                                  //but can look like this: const [count, dispatch] = useReducer(reducer, {count:0, todos: []});
                                                //"state" contains {count:0} object 
//3.Get the "count" object from state                                             
const {count} = state; 



  //1.Define what you want to return {count} and onClick={() => "dispatch({type: 'decrement'})}" and "dispatch({type: 'increment'})}" added later on
  return (
    <>
     <label>Count: {count}</label> 
     {/*5.Setting  "dispatch" functions that calls "reducer"*/}
      <button onClick={() => dispatch({type: 'decrement'})}> -</button>
                            {/*setCount(count => count - 1);//Instead of using "setCount" ("setCount" receives a callback function)*/}
                            {/*"dispatch" receives an object that is going to be the value of "action" - in step 4*/} 
                            {/*"action" is an object that has a "type" key,*/}
                            {/*it's value is a string that describes the action that i want to execute*/}
      <button onClick={() => dispatch({type: 'increment'})}> +</button>
    </>
  );
}

export default App;



