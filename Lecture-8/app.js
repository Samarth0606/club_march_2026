let imgs = document.querySelectorAll('.main-slider ul img')
let prev_btn = document.querySelector('.control-prev')
let next_btn = document.querySelector('.control-next')

let n = 0;

function changeSlider(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display = "none"
    }
    imgs[n].style.display = "block"
}

changeSlider()

prev_btn.addEventListener('click' , (e)=>{
    if(n>0){
        n--;
    }else{
        n = imgs.length-1;
    }
    changeSlider()
})
next_btn.addEventListener('click' , (e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n = 0;
    }
    changeSlider()
})