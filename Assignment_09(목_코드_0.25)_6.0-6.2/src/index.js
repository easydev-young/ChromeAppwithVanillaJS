const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];

const body = document.querySelector("body");
const bnt = document.querySelector("button");
const max = colors.length;

function getRandomInt() {
    return Math.floor(Math.random() * max);
}

function givemecolor(event) {
    event.preventDefault();

    const leftColor = colors[getRandomInt()];
    const rightColor = colors[getRandomInt()];

    body.style.background = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
}

bnt.addEventListener("click", givemecolor)