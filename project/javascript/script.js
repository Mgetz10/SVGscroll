const interactiveBtns = Array.prototype.slice.call(document.querySelectorAll('.option'))
const optionsContainer = document.querySelector('.optionsContainer')
const bottomContainer = document.querySelector('.bottomContainer')
const interactionIframeContainer = document.querySelector('.interactionIframeContainer')
const interactionIframe = document.querySelector('#interactionIframe')

function iframeShow() {
    interactionIframeContainer.classList.remove('hidden')
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