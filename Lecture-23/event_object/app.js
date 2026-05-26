
let inp = document.querySelector('input')

console.log(inp);

// event / e
inp.addEventListener('keypress' , (e)=>{
    if(e.which === 13){
        console.log(e.target.value);
    }
} )

// -------------------------------

// multiple events
// keydown
// keyup


