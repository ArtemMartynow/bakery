// add animation on btn

let homeBtn = document.getElementById('home-page-btn')

homeBtn.addEventListener('click', function(){
    homeBtn.className = 'button-animate'
    setTimeout(removeClass, 400)
})

function removeClass() {
    homeBtn.removeAttribute('class')
}

// slider

let leftBtnSlider = document.getElementById('tasty-pancakes-content-slider-left-btn')
let rightBtnSlider = document.getElementById('tasty-pancakes-content-slider-right-btn')
let sliderImg = document.getElementById('start-img-tasty-pancakes-slider')

let imgsSlider = 0

rightBtnSlider.addEventListener('click', () => {
    if(imgsSlider != 240) {
        imgsSlider = imgsSlider + 120
        sliderImg.style.paddingLeft = imgsSlider + 'px'
        return
    } 
    console.log(imgsSlider)
})

leftBtnSlider.addEventListener('click', () => {
    if(imgsSlider != 0) {
        imgsSlider = imgsSlider - 120
        sliderImg.style.paddingLeft = imgsSlider + 'px'
        return
    } 
    console.log(imgsSlider)
})