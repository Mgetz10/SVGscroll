var interactiveBtns = Array.prototype.slice.call(document.querySelectorAll('.option'))
var optionsContainer = document.querySelector('.optionsContainer')
var bottomContainer = document.querySelector('.bottomContainer')
var interactionIframeContainer = Array.prototype.slice.call(document.querySelectorAll('.interactionIframeContainer'))
// var interactionIframes = Array.prototype.slice.call(document.querySelectorAll('.interactionIframeContainer iframe'))

interactionIframeContainer.forEach(function (cont) {
    // hideOnClickOutside(cont)
    cont.addEventListener('click', hideIframe)
})

interactiveBtns.forEach(function (btn) {
    btn.addEventListener('click', iframeShow)
})


function iframeShow() {
    var iframeQuery = '.interactionIframeContainer.' + this.dataset.frame
    var thisiFrame = document.querySelector(iframeQuery)
    // var iframeSlides = document.querySelector(iframeQuery + ' body')
    // console.log(iframeSlides)
    thisiFrame.classList.remove('hidden')
    // thisiFrame.style.height = thisiFrame.offsetWidth / (16 / 9)
    thisiFrame.src = this.dataset.src
    // hideOnClickOutside(thisiFrame.firstChild)
}

function hideIframe() {
    this.classList.add('hidden')
}

// function hideOnClickOutside(element) {
//     console.log('fired setup')

//     function outsideClickListener(event) {
//         console.log('fired click')
//         // event.stopPropagation()
//         if (!element.contains(event.target) && isVisible(element)) { // or use: event.target.closest(selector) === null
//             element.classList.add('hidden')
//             removeClickListener()
//         }
//     }

//     function removeClickListener() {
//         console.log('fired remove')
//         document.removeEventListener('click', outsideClickListener)
//     }

//     console.log('listener')
//     document.addEventListener('click', outsideClickListener, {
//         capture: true
//     })
// }

// function isVisible(elem) {
//     return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
// } // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.j}