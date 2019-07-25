// carousel
const iframeContainer = document.querySelector('.iframeContainer')
const carouselImgs = [...document.querySelectorAll('.iframeContainer img')];
const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');
const dots = document.querySelectorAll('.carouselDots')


function move(paramDirection) {
    var activeImg = document.querySelector('.active')
    var imgPos = activeImg.classList
    var activePos = parseInt(imgPos[0].split('pos')[1])

    var newPos;
    if (typeof paramDirection === 'string') {
        if (paramDirection === 'left' && activePos > 0) {
            newPos = activePos - 1
        } else if (paramDirection === 'left') {
            newPos = 4;
        } else if (activePos < 4) {
            newPos = activePos + 1
        } else {
            newPos = 0;
        }

    } else {
        newPos = parseInt(this.classList[1].split('dot')[1])
    }

    console.log(newPos, activePos)
    imgPos.remove('active')
    carouselImgs[newPos].classList.add('active')
    dots[activePos].classList.remove('dotActive')
    dots[newPos].classList.add('dotActive')

    carouselImgs[newPos].style.left = '0%';

    carouselImgs.forEach(img => {
        var thisPos = parseInt(img.classList[0].split('pos')[1])
        var posDif = thisPos - newPos
        var newPercentage = '' + posDif + "00" + '%'
        carouselImgs[thisPos].style.left = newPercentage;
        console.log(newPercentage)
    })
}


arrowLeft.addEventListener('click', function () {
    move("left")
})
arrowRight.addEventListener('click', function () {
    move("right")
})
dots.forEach(dot => dot.addEventListener('click', move))