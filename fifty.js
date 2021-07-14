const circles = document.querySelectorAll(".circle");
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

for (var i = 0; i < circles.length; i++) {

    // shortcut! the current div in the list
    var circle = circles[i];

    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);

    // update top and left position
    circle.style.top = randomTop + "px";
    circle.style.left = randomLeft + "px";

}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {

    return Math.random() * (max - min) + min;

}


inView('.section')
    .on('enter', section => {
        section.classList.add('in-viewport')
    })
    .on('exit', section => {
        section.classList.remove('in-viewport')
    })

inView.threshold(0.5)


const sections = document.querySelectorAll('.section')

sections.forEach((section, index) => {

    const artists = section.querySelectorAll('.lineup li')

    artists.forEach((artist, index) => {
        const delay = index * 100
        artist.style.transitionDelay = delay + 'ms'
    })
})