let totalSliders = document.querySelectorAll('.slider--item').length;
currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(100vw *${totalSliders} )`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev(){
    currentSlide--;
    if(currentSlide <0){
        currentSlide = totalSliders - 1
    }
    updateMargn()
}

function goNext(){
    currentSlide++;
    if(currentSlide> (totalSliders -1)){
        currentSlide = 0;
       
    }
    updateMargn()
}
function updateMargn(){
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 4000)