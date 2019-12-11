// carousel
var iframeContainer = document.querySelector('.iframeContainer');
var carouselImgs = Array.prototype.slice.call(
  document.querySelectorAll('.iframeContainer iframe')
);
var arrowLeft = document.querySelector('.arrowLeft');
var arrowRight = document.querySelector('.arrowRight');
var dots = Array.prototype.slice.call(
  document.querySelectorAll('.carouselDots')
);

function move(paramDirection) {
  var activeImg = document.querySelector('.active');
  var imgPos = activeImg.classList;
  var activePos = parseInt(imgPos[0].split('pos')[1]);

  var newPos;
  if (typeof paramDirection === 'string') {
    if (paramDirection === 'left' && activePos > 0) {
      newPos = activePos - 1;
    } else if (paramDirection === 'left') {
      newPos = 4;
    } else if (activePos < 4) {
      newPos = activePos + 1;
    } else {
      newPos = 0;
    }
  } else {
    newPos = parseInt(this.classList[1].split('dot')[1]);
  }

  imgPos.remove('active');
  dots[activePos].classList.remove('dotActive');
  carouselImgs[newPos].classList.add('active');
  dots[newPos].classList.add('dotActive');

  carouselImgs[newPos].style.left = '0%';

  carouselImgs.forEach(function(img) {
    var thisPos = parseInt(img.classList[0].split('pos')[1]);
    var posDif = thisPos - newPos;
    var newPercentage = '' + posDif + '00' + '%';
    carouselImgs[thisPos].style.left = newPercentage;
  });
}

arrowLeft.addEventListener('click', function() {
  move('left');
});
arrowRight.addEventListener('click', function() {
  move('right');
});
dots.forEach(function(dot) {
  dot.addEventListener('click', move);
});

// carousel lazyLoader
// get main carousel
// if loaded
var iframeSRCs = [];
carouselImgs[0].addEventListener('load', function() {
  console.log('loaded');
  // add srcs to other carousels
  for (var i = 1; i < carouselImgs.length; i++) {
    var thisiFrame = carouselImgs[i];
    var url =
      'https://www.simpleshowinteractive.com/projects/internal/menus/#/' +
      thisiFrame.dataset.menu;
    thisiFrame.src = url;
  }
});
// (https://www.simpleshowinteractive.com/projects/internal/menus/#/I2
// https://www.simpleshowinteractive.com/projects/internal/menus/#/I3
// https://www.simpleshowinteractive.com/projects/internal/menus/#/I4
// https://www.simpleshowinteractive.com/projects/internal/menus/#/I1)
