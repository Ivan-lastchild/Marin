let slideLeft = document.querySelector(".slide_left");
let slideRight = document.querySelector(".slide_right");
let witdtSlideBlock = document.querySelector(".review__block").offsetWidth;
let slides = document.querySelectorAll(".review__block-item");
let arrOfSlides = Array.from(slides);

let currSlide = 0;

slideLeft.addEventListener("click", (e)=>{
    console.log(e.pageX)
})

slideLeft.addEventListener('click', doSlideLeft);
slideRight.addEventListener('click', doSlideRight);
setInterval(doSlideRight, 8000);


function doSlideRight(){
    if (currSlide < witdtSlideBlock * (arrOfSlides.length-1)){
        currSlide += witdtSlideBlock
        arrOfSlides.forEach((item)=>{
            item.style = `transform: translate(${-currSlide}px, ${0})`;
        });
    } else {
        currSlide = 0;
        arrOfSlides.forEach((item)=>{
            item.style = `transform: translate(${-currSlide}px, ${0})`;
        });
    }
}

function doSlideLeft() {
    if (currSlide > 0){
        currSlide -= witdtSlideBlock
        arrOfSlides.forEach((item)=>{
            item.style = `transform: translate(${-currSlide}px, ${0})`;
        })
    } else {
        currSlide = witdtSlideBlock*(arrOfSlides.length-1);
        arrOfSlides.forEach((item)=>{
            item.style = `transform: translate(${-currSlide}px, ${0})`;
        })
    }
}

