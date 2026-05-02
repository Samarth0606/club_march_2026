

// function small(){
//     console.log("i am small");
// }

// function bigger(fn){ //hof
//     console.log("i am bigger");
//     fn();
// }

// bigger( small );

// --------------------------------------------------

// function outer(){ //hof
//     console.log("i am outer");

//     function inner(){
//         console.log("i am inner");
//     }

//     return inner;
// }

// outer();

// --------------------------------------------------

// callback fn: when a fn is passed as an argument in another fn then its a CB fn

function small(){ //callback
    console.log("i am small");
}

function bigger(fn){ //hof
    console.log("i am bigger");
    fn();
}

bigger( small );
