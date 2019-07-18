const svgs = [...document.getElementsByClassName("svgPath")]
const svgs1 = [...document.getElementsByClassName("path1")]
const svgs2 = [...document.getElementsByClassName("path2")]
const svgs3 = [...document.getElementsByClassName("path3")]
const svgs4 = [...document.getElementsByClassName("path4")]
const svgs5 = [...document.getElementsByClassName("path5")]
const svgs6 = [...document.getElementsByClassName("path6")]
const lengths = [];

const mainDiv = document.querySelector('.mainDiv')

// const logo = document.querySelector('.logo')
// logo.style.width = mainDiv.offsetWidth * 0.51
// logo.style.left = mainDiv.offsetLeft * 0.51
// console.log(mainDiv.offsetLeft)

var fontSizeFactor = 69;

var fontSize = mainDiv.offsetWidth / fontSizeFactor;
document.documentElement.style.fontSize = fontSize + "px"


window.addEventListener('resize', function () {
    var fontSize = mainDiv.offsetWidth / fontSizeFactor;
    console.log(fontSize)
    document.documentElement.style.fontSize = fontSize + "px"
});

svgs1.forEach(function (svg, index) {
    lengths.push(svg.getTotalLength())
    // start position of the drawing - normal display pre-animation
    svg.style.strokeDasharray = lengths[index];

    // hides the svg before the scrolling starts
    svg.style.strokeDashoffset = lengths[index];
})
svgs2.forEach(function (svg, index) {
    lengths.push(svg.getTotalLength())
    // start position of the drawing - normal display pre-animation
    svg.style.strokeDasharray = lengths[index];

    // hides the svg before the scrolling starts
    svg.style.strokeDashoffset = lengths[index];
})
svgs3.forEach(function (svg, index) {
    lengths.push(svg.getTotalLength())
    // start position of the drawing - normal display pre-animation
    svg.style.strokeDasharray = lengths[index];

    // hides the svg before the scrolling starts
    svg.style.strokeDashoffset = lengths[index];
})
svgs4.forEach(function (svg, index) {
    lengths.push(svg.getTotalLength())
    // start position of the drawing - normal display pre-animation
    svg.style.strokeDasharray = lengths[index];

    // hides the svg before the scrolling starts
    svg.style.strokeDashoffset = lengths[index];
})
svgs5.forEach(function (svg, index) {
    lengths.push(svg.getTotalLength())
    // start position of the drawing - normal display pre-animation
    svg.style.strokeDasharray = lengths[index];

    // hides the svg before the scrolling starts
    svg.style.strokeDashoffset = lengths[index];
})
svgs6.forEach(function (svg, index) {
    lengths.push(svg.getTotalLength())
    // start position of the drawing - normal display pre-animation
    svg.style.strokeDasharray = lengths[index];

    // hides the svg before the scrolling starts
    svg.style.strokeDashoffset = lengths[index];
})


// offset the svg dash by the same amount as the percentage scrolled
window.addEventListener("scroll", function () {
    const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // this.console.log(scrollpercent, mainDiv.offsetHeight * 0.5 + mainDiv.offsetTop)
    // if (scrollpercent > (mainDiv.offsetHeight * 0.5 + mainDiv.offsetTop)) {
    //     logo.style.position = "absolute";
    //     logo.style.top = "5%";
    // }

    svgs1.forEach(function (svg, index) {
        const draw = lengths[index] * scrollpercent;


        // Reverse the drawing (when scrolling upwards)
        if (scrollpercent < 0.5) {
            svg.style.strokeDashoffset = lengths[index] - draw / 3;
        }
    })
    svgs2.forEach(function (svg, index) {
        var draw = 0;
        draw = lengths[index] * scrollpercent;

        svg.style.strokeDashoffset = lengths[index] - draw / 7;
        // }
    })
    const middleOffset = 0.4;
    svgs3.forEach(function (svg, index) {
        var draw = 0;
        if (scrollpercent > middleOffset) {
            draw = lengths[index] * (scrollpercent - middleOffset);
        }


        // Reverse the drawing (when scrolling upwards)
        // if (scrollpercent < 0.5) {
        svg.style.strokeDashoffset = lengths[index] - draw / 5;
        // }
    })
    svgs4.forEach(function (svg, index) {
        var draw = 0;
        if (scrollpercent > middleOffset) {
            draw = lengths[index] * (scrollpercent - middleOffset);
        }

        // Reverse the drawing (when scrolling upwards)
        // if (scrollpercent > 0.5) {
        svg.style.strokeDashoffset = lengths[index] - draw / 10;
        // }
    })
    const bottomOffset = 0.65;
    svgs5.forEach(function (svg, index) {
        var draw = 0;
        if (scrollpercent > bottomOffset) {
            draw = lengths[index] * (scrollpercent - bottomOffset);
        }


        // Reverse the drawing (when scrolling upwards)
        // if (scrollpercent < 0.5) {
        svg.style.strokeDashoffset = lengths[index] - draw / 6;
        // }
    })
    svgs6.forEach(function (svg, index) {
        var draw = 0;
        if (scrollpercent > bottomOffset) {
            draw = lengths[index] * (scrollpercent - bottomOffset);
        }

        // Reverse the drawing (when scrolling upwards)
        // if (scrollpercent > 0.5) {
        svg.style.strokeDashoffset = lengths[index] - draw / 14;
        // }
    })
});