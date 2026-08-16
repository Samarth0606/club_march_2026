import React, { useContext, useState } from 'react'
import { CountContext } from '../Context';

function Drilling() {
    let [count,setCount] = useState(10);
  return (
    <div>
        <CountContext.Provider value={count}>
            <Count setCount={setCount} />
        </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
    return(
        <div>
            <CountRenderer />
            <Button setCount={setCount} />
        </div>
    )
}
function CountRenderer(){
    let count = useContext(CountContext)
    return(
        <h1>Count: {count}</h1>
    )
}

function Button({setCount}){
    let count = useContext(CountContext)
    return(
        <div>
            <button onClick={()=>setCount(count+1)} >INC +</button>
            <button onClick={()=>setCount(count-1)} >DEC -</button>
        </div>
    )
}

export default Drilling