let user = {
    firstName: "Samarth",
    lastName: "Vohra",
    // email: "samarth@gmail.com",
    isMale: true,
    age: 99
}
let user2 = {
    firstName: "Samarth",
    lastName: "Vohra",
    email: "samarth@gmail.com",
    age: 99
}
// function isLegal(user : {
//     firstName: string,
//     lastName:string,
//     email?: string,
//     isMale?: boolean,
//     age: number
// } ){
//     user.age > 18 ? true : false
// }
// isLegal(user)
// isLegal(user2)

// ----------------------------------
// interface - types of object
// interface User{
//     firstName: string,
//     lastName:string,
//     email?: string,
//     isMale?: boolean,
//     age: number
// }

// type User = {
//     firstName: string,
//     lastName:string,
//     email?: string,
//     isMale?: boolean,
//     age: number
// }

// function isLegal(user : User ){
//     user.age > 18 ? true : false
// }
// isLegal(user)
// isLegal(user2)

// ----------------------------------

// type Web  = {
//     name: string
// }
// type DSA = {
//     question: number
// }

// type Sam = Web & DSA;
// type Sammy = Web | DSA;

// ----------------------------------

// type Key = "up" | "down" | "right" | "left"

// function doSomething(keyPresses:Key){
//     if(keyPresses === "up"){}
//     else if(keyPresses === "down"){}
// }
// doSomething("up")
// doSomething("down")
// doSomething("chandiagarh")

// ----------------------------------

enum Direction{
     up , 
     down , 
     right, 
     left
} 

function doSomething(keyPresses:Direction){
    if(keyPresses === Direction.up){}
    else if(keyPresses === Direction.down){}
}
doSomething(Direction.up)
doSomething(Direction.down)
console.log(Direction.up);
console.log(Direction.down);


enum Responses{
    Succes= 200,
    Error= 400,
}