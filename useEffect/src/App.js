import './App.css';

import React, {useState, useEffect} from 'react'

/*
SECTION NOTES
---------------------------
1. useEffect is ran every single time the component renders.
2. To make useEffect only run when a specific variable changes, use the array parameter 
3. When your component unmounts, the return function for useEffect will be called.
---------------------------
*/

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
  
    <div>
      {windowWidth}
    </div>

  );
}

export default App;
