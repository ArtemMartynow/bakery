let homeBtn = document.getElementById('home-page-btn')

homeBtn.addEventListener('click', function(){
    homeBtn.className = 'button-animate'
    setTimeout(removeClass, 400)
})

function removeClass() {
    homeBtn.removeAttribute('class')
}


