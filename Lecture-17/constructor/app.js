

// function sam(){

// }
// console.log( sam() ); //undefined

// --------------------------

// function sam(){

// }
// console.log( sam() ); // undefined
// console.log( new sam() ); // {} empty 


// ---------------------------------------------------------



function person(naam , umar, sach , rang){
    // properties
    this.name = naam;
    this.age = umar;
    this.isMale = sach;
    this.favColor = rang;
    //methods = fn inside objects
    this.fun = function(){ console.log("heyy there good morning") }
}

let p1 = new person("Sam",12,true,"blue"); 
let p2 = new person("Muskan",11,false,"pink"); // args - the way i want
console.log(p1);
console.log(p2);


