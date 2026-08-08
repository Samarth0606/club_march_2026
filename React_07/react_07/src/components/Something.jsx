import React, { memo, useState } from 'react'

function Bada({username}) {
    const [userr,setUserr] = useState(username)
    function handleClick(){
        setUserr(Math.floor(Math.random()*10));
    }
  return (
    <div>
        <Chotu user={userr} />
        <button onClick={handleClick} >Change</button>
        <Chotu user="MAVERICK" />
        <Chotu user="VOHRA" />
    </div>
  )
}
const Chotu = memo( function({user}) {
  return (
    <div>
        <h1>Name: {user} </h1>
    </div>
  )
} )
// function Chotu({user}) {
//   return (
//     <div>
//         <h1>Name: {user} </h1>
//     </div>
//   )
// }


export default Bada