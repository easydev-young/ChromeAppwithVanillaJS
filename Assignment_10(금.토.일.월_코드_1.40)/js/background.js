const images = ["0.jpg", "1.jpg", "2.jpg"];

const colorfullImage = images[Math.floor(Math.random() * images.length)];

console.log(colorfullImage);

const bgImage = document.createElement("img");
bgImage.src = `img/${colorfullImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);