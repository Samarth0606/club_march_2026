


// function handleClap(){
//     console.log("clapping...");
// }

// --------------------------------------------------

// let btn = document.querySelector('button');

// function handlesong(){
//     console.log("sing song...");
// }

// function handleClap2(){
//     console.log("clapping2...");
// }

// btn.onclick = handleClap2;
// btn.onclick = handlesong;

// --------------------------------------------------
let btn = document.querySelector('button');

function handlesong(){
    console.log("sing song...");
}

function handleClap2(){
    console.log("clapping2...");
}

btn.addEventListener('click' , handlesong)
btn.addEventListener('click' , handleClap2)
