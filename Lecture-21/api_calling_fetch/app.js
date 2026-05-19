

// fetch('https://jsonplaceholder.typicode.com/todos')

// const API = 'https://jsonplaceholder.typicode.com/todos';
// fetch(API) //returns a promise & only gives us partial data
// .then((resp)=>{ return resp.json() }) //return another promise // entire data
// .then((data)=>{ console.log(data)  })
// .catch((err)=>{ console.log(err)   })


// ---------------------------

// const API = "https://api.tvmaze.com/search/shows?q=girls"
// // let finalData = null;
// fetch(API)
// .then((data)=>{return data.json() })
// .then((resp)=>{
//     // finalData = resp 
//     for(let item of resp){
//         console.log(item.show.name ,":", item?.show?.rating?.average);
//     }
// })
// .catch((err)=>{console.log(err) })

// ---------------------------

// async await

const API = "https://api.tvmaze.com/search/shows?q=girls"
// let finalData = null;
async function calling(){
    let data = await fetch(API) //partial data
    let resp = await data.json();
    console.log(resp);
}
calling()

// ---------------------------
// fetch with async await


