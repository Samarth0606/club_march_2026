import Student from "./components/Student"
import Teacher from "./components/Teacher"

function App() {

  // let a = 10;
  // let b = "sam";
  // let c = true;
  // let d = null;
  // let e = "undefined";
  let arr = [10,20,30,40,50]


  return (
    <div>
      <h1>App</h1>
      {
        arr.map((item,index)=>{
          return(
            <h1>{item}:{index}</h1>
          )
        })
      }

      {/* {a}
      {b}
      {JSON.stringify(c)}
      {JSON.stringify(d)}
      {e} */}
      {/* {JSON.stringify(e)} */}
      {/* <Teacher />
      <Student />
      <Student /> */}
    </div>
  )
}

export default App