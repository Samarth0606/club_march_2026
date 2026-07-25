import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)

    function handleDec(){
        setCount((count)=>count-1) //async task - do rest of the task ill change later on(0+1)
        setCount((count)=>count-1) //async task - do rest of the task ill change later on(0+1)
        setCount((count)=>count-1) //async task - do rest of the task ill change later on(0+1)
    }
    function handleInc(){ //remembers the prev value
        setCount((count)=>count+1) // 0+1 = 1
        setCount((count)=>count+1) // 1+1 = 2
        setCount((count)=>count+1) // 3
    }

  return (
    <div>
        <button onClick={handleDec}>-</button>
        <h1>Counter - {count}</h1>
        <button onClick={handleInc}>+</button>
    </div>
  )
}

export default Counter