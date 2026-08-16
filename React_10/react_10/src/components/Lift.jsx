import React from 'react'

function Lift() {
    function sam(a){
        console.log(a);
    }
  return (
    <div>
        <Chotu fn={sam} />
    </div>
  )
}

function Chotu({fn}){
    let a = 100;

    return(
        <button onClick={()=>fn(a)} >Click</button>
    )
}

export default Lift