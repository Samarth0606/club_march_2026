import React, { useState } from 'react'

function Logout() {
    // let name = "Samarth Vohra";
    const [user,setUser] = useState("Samarth Vohra")
    function handleLogout(){
        setUser("Anonymous") 
    }

  return (
    <div>
        <h1>{user}</h1>
        <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Logout