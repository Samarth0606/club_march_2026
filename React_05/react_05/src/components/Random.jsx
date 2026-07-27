import React, { useState } from 'react'

function Random() {

    const [count,setCount] = useState(0);
    const [user,setUser] = useState("sam");
    
    function handleInc(){
        setCount(count+1)
        setCount(count+1)
        setUser("Vohra")
    }

  return (
    <div>
        <button onClick={handleInc} >inc</button>
        <h1>Count - {count}</h1>
        <h1>User - {user}</h1>
    </div>
  )
}

export default Random