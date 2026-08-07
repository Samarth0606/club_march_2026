// import React from 'react'
// import Counter from './components/Counter';

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       count: 0,
//       // user: "sam"
//     }
//   }
//   componentDidMount(){
//     console.log("component is mounted");
//   }
//   componentWillUnmount(){
//     console.log("component is unmounted");
//   }
//   decrement() {
//       this.setState({count: this.state.count - 1 })
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={()=>this.setState({count: this.state.count+1 })} >+</button>
//         <Counter count={this.state.count} />
//         <button onClick={this.decrement.bind(this)} >-</button>
//         <h1>Welcome to App</h1>
//       </div>
//     )
//   }
// }

// export default App

// ------------------------------

import React, { useEffect, useState } from 'react'

function App() {

  const [count,setCount] = useState(0);
  useEffect(()=>{
    if(count === 0){
      console.log("mounting");
    }
    else if(count>0 && count<=5){
      console.log("updating");
    }
    else{
      return ()=>console.log("unmouting");
    }
  } , [count])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)} >Inc:</button>
    </div>
  )
}

export default App