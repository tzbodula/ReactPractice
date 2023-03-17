import React, {useState} from 'react'

/*
SECTION NOTES
---------------------------
1. Hooks must be used within function components
2. Hooks cannot be used within conditionals or loops
3. useState is pretty much a container for a value. The application re-renders whenever this changes
4. The function version of a set state should be used when trying to include the previous state with your update
5. If you use some sort of slow computation for your initial state, make sure to use the function version of the default value
6. If you use an object in your inital state, you must use the spread operator to use the previous values of the object when updating your state
7. You can have unlimited useState calls, and it's much more efficent to handle an object with multiple states then one object. 
---------------------------
*/
function App() {
  const [count, setCount] = useState(() => {
    return 4;
  })

  const [theme, setTheme] = useState("Blue")

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button>
    </>

  );
}

export default App;
