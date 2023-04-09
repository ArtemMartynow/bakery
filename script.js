let homeBtn = document.getElementById('home-page-btn')

homeBtn.addEventListener('click', function(){
    homeBtn.className = 'button-animate'
    setTimeout(asd, 400)
})

function asd() {
    homeBtn.removeAttribute('class')
}


