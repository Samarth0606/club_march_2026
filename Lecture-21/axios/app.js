



// const API = "https://api.tvmaze.com/search/shows?q=girls"
// // 'https://jsonplaceholder.typicode.com/todos'

// axios.get(API) //promise
// .then((resp)=>console.log(resp.data))
// .catch((err)=>console.log(err))


// -------------------------
// axios with async await
let API = "https://jsonplaceholder.typicode.com/todos"

async function calling(){
    let resp = await axios.get(API)
    console.log(resp.data);
}
calling();





