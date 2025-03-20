let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let item = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let fristPosition = 0
let lastPosition = item.length -1

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    item[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')
    
    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}


prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < fristPosition ? lastPosition : active - 1
    item[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')
    
    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}



