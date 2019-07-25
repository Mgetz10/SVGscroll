const interactiveBtns = document.querySelectorAll('.option')
const optionsContainer = document.querySelector('.optionsContainer')
const bottomContainer = document.querySelector('.bottomContainer')
const interactionIframe = document.querySelector('.interactionIframe')

function iframeShow() {
    optionsContainer.style.top = '74.5%'
    bottomContainer.style.top = '85.8%'
    interactionIframe.classList.remove('hidden')
}

interactiveBtns.forEach(btn => btn.addEventListener('click', iframeShow))