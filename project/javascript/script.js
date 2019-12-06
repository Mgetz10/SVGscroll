var interactiveBtns = Array.prototype.slice.call(document.querySelectorAll('.option'))
var optionsContainer = document.querySelector('.optionsContainer')
var bottomContainer = document.querySelector('.bottomContainer')
var interactionIframeContainer = Array.prototype.slice.call(document.querySelectorAll('.interactionIframeContainer'))

function iframeShow() {
    var iframeQuery = '.interactionIframeContainer.' + this.dataset.frame
    var thisiFrame = document.querySelector(iframeQuery)
    thisiFrame.classList.remove('hidden')
    // thisiFrame.style.height = thisiFrame.offsetWidth / (16 / 9)
    thisiFrame.src = this.dataset.src
}

function hideIframe() {
    this.classList.add('hidden')
}

interactionIframeContainer.forEach(function (cont) {
    cont.addEventListener('click', hideIframe)
})

interactiveBtns.forEach(function (btn) {
    btn.addEventListener('click', iframeShow)
})

window.addEventListener('resize', function () {
    // interactionIframe.style.height = toString(interactionIframe.offsetWidth / (16 / 9));
})