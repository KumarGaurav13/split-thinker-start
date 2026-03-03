import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  // const incrementHandler = (currVal) => {
  //   // setCount (currVal + 1); //shorthand notation
  //   setCount((preValue) => preValue+ currVal + 1);
  //   setCount((preValue) => preValue + 1);
  //   setCount((preValue) => preValue + 1);
  // }
  return (
    <>
      
      <h1>Counter is {count}</h1>
      <div className="card">
          Count is {count}
      </div>

      <div>
        <button 
          onClick={() => setCount(count+1)} 
          style={{margin: "0 5px"}}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(Math.max(count-1, 0))} 
          style={{margin: "0 5px"}}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount((count)=> 0)} 
          style={{margin: "0 5px"}}
        >
          Reset
        </button>
      </div>

      <div style={{margin: "20px 0"}}>
        <input 
          style={{
            width: "100px",
            border: "1px solid gray",
            margin: "0 5px",
            padding: "0.6em 1.2em"
          }}
          value={countToSet}
          onChange={(e) => {setCountToSet(e.target.value)}}
          type='text'
        />
        <button 
          onClick={() => {
            setCount((count) => Number(countToSet));
            setCountToSet(0);
          }} 
          style={{margin: "0 5px"}}
        >
          Set to {countToSet}
        </button>
      </div>
      
    </>
  )
}

export default App
