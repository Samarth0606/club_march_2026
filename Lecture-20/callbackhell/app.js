

function step1(fn){
    console.log("please wait i am selecting image...");
    setTimeout(()=>{
        console.log("image selected successfully");
        fn('selected image')
    } , 4000)
}
function step2(image , fn){
    console.log(`please wait applying filter to ${image}`);
    setTimeout(()=>{
        console.log("filter applied");
        fn("filtered image")
    } , 2000)
}
function step3(filter , fn){
    console.log(`please wait adding caption to ${filter}`);
    setTimeout(()=>{
        console.log("caption added");
        fn('Captioned Image')
    } , 5000)
}
function step4(Captioned){
    console.log(`finally uploading the ${Captioned}`);
    setTimeout(()=>{
        console.log("Image finally uploaded");
    } , 3000)
}

step1( function(image){
    step2(image , function(filter){
        step3(filter , function(Captioned){
            step4(Captioned)
        })
    })
} )





