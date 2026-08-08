import React, { memo, useCallback, useState } from 'react'

function UseCallback() {
    const [count,setCount] = useState(0);
    // let b = 1;
    let b = useCallback(function(){console.log("hello")} , [])
  return (
    <div>
        <Chotu prop={b} />
        <button onClick={()=>setCount(count+1)} >Inc</button>
    </div>
  )
}

const Chotu = memo( function ({prop}) {
  return (
    <div>
        Chotu - {prop}
    </div>
  )
} )

export default UseCallback