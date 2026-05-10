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

// function Sam(n , a){
//     this.name = n;
//     this.age = a;
// }
// let s1 = new Sam("mav" , 5)
// let s2 = new Sam("sam" , 12)

// console.log(s1);
// console.log(s2);

// -------------------------
// 5. arrow fn: this keyword is dependant on parents this


// let obj = {
//     a: 500,
//     fun: function(){ 
//         console.log(this , "1"); //obj       window
//         let sam = ()=>{
//             console.log(this , "2"); //obj   window
//         }
//         sam()
//     }
// }

// // obj.fun()

// let ans = obj.fun;
// ans()

// -------------------------
// 4. indirect calling: call apply bind // changes the reference of this keyword.

let obj= {
    a: 10,
    fn: function(x,y){
        console.log(this.a , x , y);
    }
}
obj.fn() //10

let obj2= {
    a: 50
}

// call
obj.fn.call(obj2, 100 , 200) //new ref of this keyword - arguments are comma seperated
obj.fn.apply(obj2, [100 , 200]) //new ref of this keyword - arguemnt are in array

// bind - it creates a copy of that fn, it doesnot execute
let newFn = obj.fn.bind(obj2, 100 , 200)
newFn();








