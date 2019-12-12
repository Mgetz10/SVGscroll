var log = console.log;
// function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function () {
//         var context = this,
//             args = arguments;
//         var later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// }

var svgs = Array.prototype.slice.call(
  document.getElementsByClassName('svgPath')
);
var svgs1 = Array.prototype.slice.call(
  document.getElementsByClassName('path1')
);
var svgs2 = Array.prototype.slice.call(
  document.getElementsByClassName('path2')
);
var svgs3 = Array.prototype.slice.call(
  document.getElementsByClassName('path3')
);
var svgs4 = Array.prototype.slice.call(
  document.getElementsByClassName('path4')
);
var svgs5 = Array.prototype.slice.call(
  document.getElementsByClassName('path5')
);
var svgs6 = Array.prototype.slice.call(
  document.getElementsByClassName('path6')
);
var lengths = [];

var mainDiv = document.querySelector('.mainDiv');

var mobileConsoleLog = document.querySelector('.mobileConsoleLog');

// mobileConsoleLog.innerHTML = "";

// var logo = document.querySelector('.logo')
// logo.style.width = mainDiv.offsetWidth * 0.51
// logo.style.left = mainDiv.offsetLeft * 0.51
// console.log(mainDiv.offsetLeft)

var fontSizeFactor = 69;

var fontSize = mainDiv.offsetWidth / fontSizeFactor;
document.documentElement.style.fontSize = fontSize + 'px';

window.addEventListener('resize', function () {
  var fontSize = mainDiv.offsetWidth / fontSizeFactor;
  document.documentElement.style.fontSize = fontSize + 'px';
});

svgs.forEach(function (svg, index) {
  lengths.push(svg.getTotalLength());
  // start position of the drawing - normal display pre-animation
  svg.style.strokeDasharray = lengths[index];

  // hides the svg before the scrolling starts
  svg.style.strokeDashoffset = lengths[index];
});

// var isSafari = false
// var ua = navigator.userAgent.toLowerCase();
// if (ua.indexOf('safari') != -1) {
//     if (ua.indexOf('chrome') > -1) {
//         alert("Chrome") // Chrome
//     } else {
//         isSafari = true;
//         alert(isSafari)
//     }
// }
var middleOffset = 0.25;
var bottomOffset = 0.65;

var lazyLoadMarker = document.querySelector('.middleContainer');
var iframesPlaced = false;

function scrollFunc() {
  // var isMobile = false; //initiate as false
  // // device detection
  // if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  //     /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  //     isMobile = true;
  // }
  // mobileConsoleLog.innerHTML = isMobile;
  var scrollpercent;
  // if (isMobile) {
  // scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  // } else {
  scrollpercent =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  // }

  // var testObject = {
  //     "document.body.scrollTop": document.body.scrollTop,
  //     "document.documentElement.scrollTop": document.documentElement.scrollTop,
  //     "document.documentElement.scrollHeight": document.body.scrollHeight,
  //     "document.documentElement.clientHeight": document.documentElement.clientHeight
  // }
  // var testString = ''
  // for (key in testObject) {
  //     testString += key + ': <span>' + testObject[key] + '</span><br>'
  // }

  // mobileConsoleLog.innerHTML = testString;

  // if (scrollpercent > (mainDiv.offsetHeight * 0.5 + mainDiv.offsetTop)) {
  //     logo.style.position = "absolute";
  //     logo.style.top = "5%";
  // }

  svgs.forEach(function (svg, index) {
    var draw = 0;

    switch (index) {
      case 0: //top grey
        draw = lengths[index] * scrollpercent;
        // Reverse the drawing (when scrolling upwards)
        svg.style.strokeDashoffset = lengths[index] - draw / 1.5;
        break;
      case 1: //top white
        draw = lengths[index] * scrollpercent;
        svg.style.strokeDashoffset = lengths[index] - draw / 3;
        break;
      case 2: //top orange
        draw = lengths[index] * scrollpercent;
        svg.style.strokeDashoffset = lengths[index] - draw / 3;
        break;
      case 3: //middle grey
        if (scrollpercent > middleOffset) {
          draw = lengths[index] * (scrollpercent - middleOffset);
          svg.style.strokeDashoffset = lengths[index] - draw / 1.2;
        }
        break;
      case 4: //middle white
        if (scrollpercent > middleOffset) {
          draw = lengths[index] * (scrollpercent - middleOffset);
          svg.style.strokeDashoffset = lengths[index] - draw / 1.6;
        }
        break;
      case 5: //middle orange
        if (scrollpercent > middleOffset) {
          draw = lengths[index] * (scrollpercent - middleOffset);
          svg.style.strokeDashoffset = lengths[index] - draw / 1.6;
        }
        break;
      case 6: //bottom grey
        if (scrollpercent > bottomOffset) {
          draw = lengths[index] * (scrollpercent - bottomOffset);
          svg.style.strokeDashoffset = lengths[index] - draw / 1.5;
        }
        break;
      case 7: //bottom white
        if (scrollpercent > bottomOffset) {
          draw = lengths[index] * (scrollpercent - bottomOffset);
          svg.style.strokeDashoffset = lengths[index] - draw / 2;
        }
        break;
      case 8: //bottom orange
        if (scrollpercent > bottomOffset) {
          draw = lengths[index] * (scrollpercent - bottomOffset);
          svg.style.strokeDashoffset = lengths[index] - draw / 2;
        }
        break;
    }

    //fade in
    interactiveBtns.forEach(function (btn) {
      var slideInAt =
        window.scrollY + window.innerHeight - btn.offsetHeight / 2;
      // bottom of the image
      var imageBottom =
        optionsContainer.offsetTop + btn.offsetTop + btn.offsetHeight;
      var isHalfShown = slideInAt > optionsContainer.offsetTop + btn.offsetTop;
      var isNotScrolledPast = window.scrollY < imageBottom;

      if (isHalfShown && isNotScrolledPast) {
        var btnVid = btn.querySelector('video')
        btnVid.play()
        btn.classList.remove('hidden');
      } else {
        var btnVid = btn.querySelector('video')
        btnVid.pause()
        btn.classList.add('hidden');
      }
    });

    //lazy load iframes
    //get middle container element
    if (!iframesPlaced) {
      var loadiFramesAt =
        window.scrollY + window.innerHeight - lazyLoadMarker.offsetHeight / 2;
      var isHalfShown =
        loadiFramesAt > mainDiv.offsetTop + lazyLoadMarker.offsetTop;

      // if halfway down middle container
      if (isHalfShown) {
        //     generate and load iframes
        iframesPlaced = true;
        loadIframes(iframeKeys);
      }
    }
  });
}
// offset the svg dash by the same amount as the percentage scrolled
window.addEventListener('scroll', scrollFunc);