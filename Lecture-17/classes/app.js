

// syntax
class Sam{
    constructor(naam,umar,sach,rang){
        this.name = naam;
        this.age = umar;
        this.isMale = sach;
        this.favColor = rang;
    }
    fun(){ console.log("hey there i am class") } //storing in prototype only
}

class Mav extends Sam{
    constructor(naam,umar,sach,rang,roll){
        super(naam,umar,sach,rang) //calls the parent constructor
        this.rollNO = roll
    }
}


let p1 = new Sam("Sam",12,true,"blue"); 
let p2 = new Mav("Muskan",11,false,"pink",420); 
console.log(p1);
console.log(p2);









