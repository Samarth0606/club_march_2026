import React, { useState } from 'react'

function Question() {

    const [count,setCount] = useState(0);
    
    function handleInc(){
        setCount(count+1) //initial value 
        setCount(count+3) //initial value
        setCount((count)=>count+4) //prev val 
        setCount((count)=>count+2) //prev val 
        setCount(count+1) //initial value 
    }

  return (
    <div>
        <button onClick={handleInc}>inc</button>
        <h1>Count - {count}</h1>
    </div>
  )
}

export default Question