import React, {useState, useRef, useEffect} from 'react'


export default function App() {
  const [name, setName] = useState('')
  const inputRef = useRef()
  const prevName = useRef()

  useEffect(() => {
    prevName.current = name
  }, [name])

  function focus() {
    inputRef.current.focus()
  }

  return (
    <>
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
    <div>My name is {name} and it used to be {prevName.current}</div>
    <button onClick={focus}>Focus</button>
    </>
  );
}


