// once after the delay
// setTimeout(()=>{
//     console.log("I am setTimeout");
// } , 3000)

// ---------------------------------------

// infinitely after the delay
// let idd =setInterval(()=>{
//     console.log("I am setinterval");
// } , 3000)

// clearInterval(idd)

// ---------------------------------------


// let id = setInterval(()=>{
//     console.log("hello from abc");
// } , 2000)

// setTimeout(()=>{
//     clearInterval(id)
// } , 30000)

console.log("start");

setTimeout(()=>{
    console.log("middle");
} , 2000)

console.log("end");

