
// function sam(){

// }
// console.log( sam() );

// -----------------------------------

// function sam(){

// }
// console.log( new sam() );

// -----------------------------------

// async function sam(){
//     return 10  //resolved value
// }
// console.log( sam() ); //promise

// -----------------------------------

// await - used in front of promise
// await only works with async fn

// -----------------------------------


// async function sam(){
//     let resp = await fetch(API) //returns a promise
// }

// -----------------------------------


// async function sam(){
//     return new Promise((resolve , reject)=>{resolve("heyy")}) // 2, this will override 
// }

// console.log( sam() );


async function sam1(){
    console.log(10);
    console.log(20);
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const final = await resp.json()
    console.log(final  , "final1");
    console.log(30);
}

async function sam2(){
    console.log(100);
    console.log(200);
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const final = await resp.json()
    console.log(final , "final 2");
    console.log(300);
}
console.log(1);
sam1();
console.log(2);
sam2();
console.log(3);