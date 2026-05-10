// 1. direct fn calling

// function samarth(){
//     console.log(this); //window
// }
// samarth() // direct fn call


// -------------------------

// 2. object calling = this points to the object inside which that fn/method is available
// let obj = {
//     a: 100,
//     fn: function(){
//         console.log(this); //obj
//     }
// }

// obj.fn(); //indirect calling


// -------------------------

// let obj = {
//     a: 200,
//     fun: function(){
//         console.log(this , "1"); //obj
//         let sam = function(){
//             console.log(this , "2"); //window
//         }
//         sam()
//     }
// }

// obj.fun();

// -------------------------

// let obj = {
//     a: 200,
//     fun: function(){ 
//         console.log(this , "1"); //obj             window
//         let sam = function(){
//             console.log(this , "2"); //window      window
//         }
//         sam()
//     }
// }

// // obj.fun()
// let ans = obj.fun;
// ans();

// -------------------------
// 3. constructor calling = newly created object

function Sam(n , a){
    this.name = n;
    this.age = a;
}
let s1 = new Sam("mav" , 5)
let s2 = new Sam("sam" , 12)

console.log(s1);
console.log(s2);






