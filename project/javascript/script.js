var interactiveBtns = Array.prototype.slice.call(document.querySelectorAll('.option'))
var optionsContainer = document.querySelector('.optionsContainer')
var bottomContainer = document.querySelector('.bottomContainer')
var interactionIframeContainer = document.querySelector('.interactionIframeContainer')
var interactionIframe = document.querySelector('#interactionIframe')

function iframeShow() {
    interactionIframeContainer.classList.remove('hidden')
    console.log(interactionIframe.offsetWidth)
    interactionIframe.style.height = interactionIframe.offsetWidth / (16 / 9)
    interactionIframe.src = this.dataset.src
    console.log(interactionIframeContainer.classList)
}

function hideIframe() {
    interactionIframeContainer.classList.add('hidden')
}

interactionIframeContainer.addEventListener('click', hideIframe)

interactiveBtns.forEach(function (btn) {
    btn.addEventListener('click', iframeShow)
})

window.addEventListener('resize', function () {
    interactionIframe.style.height = toString(interactionIframe.offsetWidth / (16 / 9));
    console.log(interactionIframe.offsetWidth)
})