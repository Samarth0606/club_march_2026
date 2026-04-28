



// console.log(a); //undefined
// console.log(b); //error - interpreted
// console.log(c);


// var a = 10;   //undef   //global
// let b = 20;   //vu      //script
// const c = 30; //vu      //script


// undefined
// undefined
// undefined

// undefined
// err
// err

// undefined
// 20
// 30

// correct one
// undefined
// error

// -------------------------------------------

// var a = 10;  // global
// let b = 20;  // script
// const c = 30;// script

// if(true){
//     var d = 100;    // global
//     let e = 200;    // block
//     const f = 300;  // block
// }

// sam()
// function sam(){
//     var g = 1000;    // functional
//     let h = 2000;    // block
//     const i = 3000;  // block   //local
// }

// -------------------------------------------



// console.log(a);
// var a = 10;
// console.log(a);

// function bob(){
//     console.log(a);
//     var a = 200;
//     console.log(a);
// }

// bob()

// -------------------------------------------

function bob(){
    var a = 200;
    let b = 300;
    const c = 400;
    function don(){
        console.log(a+b);  
    }
    return don
}

let out = bob()
out();
