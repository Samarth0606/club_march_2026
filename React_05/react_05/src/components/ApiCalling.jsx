import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ApiCalling() {
    const [todos,setTodos] = useState([])
    useEffect(()=>{
        const API = "https://jsonplaceholder.typicode.com/todos";
        axios.get(API)
        .then((resp)=>{setTodos(resp.data) })
        .catch((err)=>{ console.log(err , "catch") })
    } , [])

  return (
    <div>
        {
            todos.map((item)=>{
                return(
                    <div>
                        <h1>{item.title}</h1>
                        <h1>{JSON.stringify(item.isCompleted)}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

// function ApiCalling() {
//     const [todos,setTodos] = useState([])
//     useEffect(()=>{
//         const API = "https://jsonplaceholder.typicode.com/todos";
//         fetch(API)
//         .then((data)=>{ return data.json() })
//         .then((resp)=>{setTodos(resp) })
//         .catch((err)=>{ console.log(err , "catch") })
//     } , [])

//   return (
//     <div>
//         {
//             todos.map((item)=>{
//                 return(
//                     <div>
//                         <h1>{item.title}</h1>
//                         <h1>{JSON.stringify(item.isCompleted)}</h1>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

export default ApiCalling