const interactiveBtns = document.querySelectorAll('.option')
const optionsContainer = document.querySelector('.optionsContainer')
const bottomContainer = document.querySelector('.bottomContainer')
const interactionIframe = document.querySelector('.interactionIframe')

function iframeShow() {
    interactionIframe.classList.remove('hidden')
}

function hideIframe() {
    interactionIframe.classList.add('hidden')
}

interactionIframe.addEventListener('click', hideIframe)

interactiveBtns.forEach(btn => btn.addEventListener('click', iframeShow))