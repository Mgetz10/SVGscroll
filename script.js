// getting the length of the svg path
// const svg = document.getElementById("svgPath")
// const length = svg.getTotalLength();
// svg.style.strokeDasharray = length
// // start position of the drawing - normal display pre-animation
// svg.style.strokeDasharray = length;

// // hides the svg before the scrolling starts
// svg.style.strokeDashoffset = length;

// window.addEventListener("scroll", function () {
//     const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//     const draw = length * scrollpercent;


//     // Reverse the drawing (when scrolling upwards)
//     svg.style.strokeDashoffset = length - draw;
// });

const svgs = [...document.getElementsByClassName("svgPath")]
const svgs1 = [...document.getElementsByClassName("path1")]
const svgs2 = [...document.getElementsByClassName("path2")]
const svgs3 = [...document.getElementsByClassName("path3")]
const svgs4 = [...document.getElementsByClassName("path4")]
const svgs5 = [...document.getElementsByClassName("path5")]
const svgs6 = [...document.getElementsByClassName("path6")]
const lengths = [];


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


// svgs.forEach(function (svg, index) {
//     // start position of the drawing - normal display pre-animation
//     svg.style.strokeDasharray = lengths[index];

//     // hides the svg before the scrolling starts
//     svg.style.strokeDashoffset = lengths[index];
// })

// offset the svg dash by the same amount as the percentage scrolled
window.addEventListener("scroll", function () {
    svgs1.forEach(function (svg, index) {
        const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        const draw = lengths[index] * scrollpercent;


        // Reverse the drawing (when scrolling upwards)
        if (scrollpercent < 0.5) {
            svg.style.strokeDashoffset = lengths[index] - draw / 5;
        }
    })
    svgs2.forEach(function (svg, index) {
        const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        var draw = 0;
        // console.log({
        //     'document.body.scrollTop': document.body.scrollTop,
        //     'document.documentElement.scrollTop': document.documentElement.scrollTop,
        //     'document.documentElement.scrollHeight': document.documentElement.scrollHeight,
        //     'document.documentElement.clientHeight': document.documentElement.clientHeight,
        //     'dbs + dds': (document.body.scrollTop + document.documentElement.scrollTop),
        //     'ddsh - ddc': (document.documentElement.scrollHeight - document.documentElement.clientHeight),
        //     "scrollpercent": scrollpercent,
        //     "draw": draw
        // })
        draw = lengths[index] * scrollpercent;

        // Reverse the drawing (when scrolling upwards)
        // if (scrollpercent > 0.5) {
        svg.style.strokeDashoffset = lengths[index] - draw / 10;
        // }
    })
    const middleOffset = 0.4;
    svgs3.forEach(function (svg, index) {
        const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
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
        const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        var draw = 0;
        if (scrollpercent > middleOffset) {
            draw = lengths[index] * (scrollpercent - middleOffset);
        }

        // Reverse the drawing (when scrolling upwards)
        // if (scrollpercent > 0.5) {
        svg.style.strokeDashoffset = lengths[index] - draw / 10;
        // }
    })
    const bottomOffset = 0.75;
    svgs5.forEach(function (svg, index) {
        const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        var draw = 0;
        if (scrollpercent > bottomOffset) {
            draw = lengths[index] * (scrollpercent - bottomOffset);
        }


        // Reverse the drawing (when scrolling upwards)
        // if (scrollpercent < 0.5) {
        svg.style.strokeDashoffset = lengths[index] - draw / 5;
        // }
    })
    svgs6.forEach(function (svg, index) {
        const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        var draw = 0;
        if (scrollpercent > bottomOffset) {
            draw = lengths[index] * (scrollpercent - bottomOffset);
        }

        // Reverse the drawing (when scrolling upwards)
        // if (scrollpercent > 0.5) {
        svg.style.strokeDashoffset = lengths[index] - draw / 10;
        // }
    })
});