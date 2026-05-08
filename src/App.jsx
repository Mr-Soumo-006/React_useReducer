import { useReducer } from "react"
import UseWindowWidth from "./hooks/useWindowWidth"
import useDarkMode from "./hooks/useDarkMode"

const initialState={count:0} //State Object 
 //I will make a function that will change the state
   //This function is known as reducer
  function reducer(state,action) //initialState,
  {
    if(action.type==="increment")
    {
      return {count:state.count+1}
    }
    else if(action.type==="decrement")
    {
      return {count:state.count-1}
    }
    else
    {
      return initialState
    }
  }
function App() {

  const [isDark,toggleMode]=useDarkMode();
  console.log("Page Render...")
  const [state,dispatch]=useReducer(reducer,initialState)
  const width=UseWindowWidth()
  console.log(window)
  return (
    <>
      <button onClick={toggleMode}>Toggle Theme</button>
      <h2>Count:{state.count}</h2> 
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      <h1>Window Width is : {width}px</h1>
    </>
  )
}

export default App
