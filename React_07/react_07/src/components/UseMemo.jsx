import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);

    function handleInp(e){
        setInp(e.target.value)
    }

    const memoCount = useMemo(()=>{
        let ans = 0;
        for(let i=1;i<=inp;i++){
            console.log("loop ran");
            ans+=i;
        }
        return ans;
    }, [inp])

  return (
    <div>
        <input onChange={handleInp} type="text" value={inp} />
        <h2>Sum: {memoCount} </h2>
        <button onClick={()=>setCount(count+1)} >inc - {count}</button>
    </div>
  )
}

export default UseMemo