
// let p1 = new Promise()

//create promise
// let p1 = new Promise( (resolve,reject)=>{
//     let data = "100 rupees";
//     let err = "Get lost";

//     resolve(data)
//     // reject(err)
// } )

// //work with promise
// p1
// .then((data)=>{ console.log(data) }) //resolve
// .catch((err)=>{ console.log(err) }) //reject
// .finally(()=>{ console.log("finally executed") }) // any of the case


// only .then() or .catch() or .finally() can be executed.

// ------------------------------------------


// solve instagram problem using promise
// Q: Problem statement:
// Step 1: select image - 4s
// Step 2: apply filter.   - 2s
// Step 3: add caption. - 5s
// Step 4: upload image - 3s

// Total time = 14s

function step1(){
    console.log("please wait selecting image");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('selected image')
        } , 4000)
    })
}
function step2(image){
    console.log(`please wait applying filter to ${image}`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('filtered image')
        } , 2000)
    })
}
function step3(filter){
    console.log(`please wait adding caption to ${filter}`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('captioned image')
        } , 5000)
    })
}
function step4(caption){
    console.log(`finally uploading ${caption}`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('uploaded image')
        } , 3000)
    })
}
step1()
.then((image)=>{
    console.log(image);
    return step2(image)
})
.then((filter)=>{
    console.log(filter);
    return step3(filter)
})
.then((caption)=>{
    console.log(caption);
    return step4(caption)
})
.then((uploaded)=>{
    console.log(uploaded);  
})




