import React, { useState } from "react"

const counter2 = () => {
  const [count, setCount] = useState(0);
  const initialCount = 0;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <div>
        <button onClick={()=>setCount(initialCount)}>reset</button>
      </div>
    </div>
  )
}

export default counter2
