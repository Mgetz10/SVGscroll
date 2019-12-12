var interactiveBtns = Array.prototype.slice.call(
  document.querySelectorAll('.option')
);
var optionsContainer = document.querySelector('.optionsContainer');
var bottomContainer = document.querySelector('.bottomContainer');

var interactionIframes = Array.prototype.slice.call(document.querySelectorAll('.interactionIframeContainer iframe'))

interactiveBtns.forEach(function (btn) {
  btn.addEventListener('click', iframeShow);
});

function iframeShow() {
  var iframeQuery = '.interactionIframeContainer.' + this.dataset.frame;
  var thisiFrame = document.querySelector(iframeQuery);
  // var iframeSlides = document.querySelector(iframeQuery + ' body')
  // console.log(iframeSlides)
  thisiFrame.classList.remove('hidden');
  // thisiFrame.style.height = thisiFrame.offsetWidth / (16 / 9)
  //   thisiFrame.src = this.dataset.src;
  // hideOnClickOutside(thisiFrame.firstChild)
}

function hideIframe() {
  this.classList.add('hidden');
}

var iframeKeys = [];
interactiveBtns.forEach(function (btn) {
  iframeKeys.push(btn.dataset.frame);
});

function loadIframes(iframeKeys) {
  interactionIframes.forEach(function (iFrame, idx) {
    // create URL from dataset
    var iframeURL =
      'https://simpleshowinteractive.com/projects/internal/' + iframeKeys[idx];
    // add src
    iFrame.src = iframeURL;

    iFrame.parentElement.addEventListener('click', hideIframe);
  });
}