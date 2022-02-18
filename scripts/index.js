let slides = document.querySelectorAll('.advantages__item');
let BtnNextSlide = document.querySelector('.arrow_next');
let BtnPrevSlide = document.querySelector('.arrow_prev');
let slideNumber = document.querySelector('.slider-control__position');
let activeSlideNumber = 0; 

function showSlide (Number) {
    slides[activeSlideNumber].classList.remove('visually-hidden');
    for(let i=0; i<slides.length; i++){
        if(!slides[i].classList.contains('visually-hidden')){
            slideNumber.textContent=i+1;
        }
    } 
}

showSlide(activeSlideNumber);
    
BtnNextSlide.addEventListener('click', () => {
    slides[activeSlideNumber].classList.add('visually-hidden');
    activeSlideNumber=(activeSlideNumber+1)%slides.length;
    showSlide(activeSlideNumber)
})

BtnPrevSlide.addEventListener('click', () => {
    slides[activeSlideNumber].classList.add('visually-hidden');
    activeSlideNumber=(activeSlideNumber+slides.length - 1)%slides.length;
    showSlide(activeSlideNumber)
})

