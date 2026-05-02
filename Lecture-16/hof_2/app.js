
// let arr = [10,20,30,40,50,60]; //6

// forEach - method(not a loop) - HOF
// accepts a callback fn - cb has 2 args -> item , index - it doesnot returns anything


// arr.forEach()
// arr.forEach( function(){} )
// arr.forEach( function(item,index){} )

// let retVal = arr.forEach( function(item,index){
//     console.log(item ,"->", index);
//     // return item; //cannot return anything
// } )

// console.log(retVal);

// -----------------------------------------------
// let arr = [10,20,30,40,50,60]; //6
// map - method - HOF
// accepts a callback fn - cb has 2 args -> item , index - 
// it returns a new array with same length as that of original array


// arr.map()
// arr.map( function(){} )
// arr.map( function(item , index){} )
// let retVal = arr.map( function(item , index){
//     return item+index
// } )
// console.log(retVal);
// console.log(arr);



// cube of the array - map

// let arr = [1,2,3,4,5]

// let retVal = arr.map( function(item,index){
//     return item ** 3
// } )

// console.log(arr);
// console.log(retVal);


// -----------------------------------------------

// let arr = [10,22,33,40,55,60]; //6
// filter - method - HOF
// accepts a callback fn - cb has 2 args -> item , index - 
// it returns a new array but length is not compulsary to be same as that of original array

// only truthy values are stored in the new array
// let newArr = arr.filter( function(item,index){
//     if(item%10 === 0){
//         return true
//     }
//     else{
//         return false
//     }
// } )
// console.log(arr);
// console.log(newArr);

// -----------------------------------------------
// Write a function that takes an array of numbers, doubles each value, 
// and then filters out the values greater than 10.

// let arr = [1,2,3,4,5,6,7]; //6

// function samarth(arr){
//     let out = arr.map( function(item, index){
//         return item * 2
//     } )
//     .filter(function(item,index){
//         if(item>10){
//             return true
//         }
//         else{
//             return false
//         }
//     })
//     return out;
// }

// console.log( samarth(arr) );


// -----------------------------------------------

// some  - HOF - RETURNS BOOLEAN VALUE - if any one is satisfying the criteria
// every - HOF - RETURNS BOOLEAN VALUE - if all of them are satisfying the criteria


let arr = [5,10,20,35,40,55,60];

let out = arr.some( function(item,index){
    console.log("checking");
    if(item%10 === 0 ){
        return true
    } else{
        return false
    }
} )

console.log( out );

let out2 = arr.every( function(item,index){
    console.log("checking");
    if(item%10 === 0 ){
        return true
    } else{
        return false
    }
} )

console.log( out2 );
