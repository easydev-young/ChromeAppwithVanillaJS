const clock = document.querySelector("h2#clock");

// function sayHello() {
//     console.log("hello");
// }

function getClock() {
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getClock(); // 로딩과 함께 보여주기 위해
setInterval(getClock, 1000);
// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);
