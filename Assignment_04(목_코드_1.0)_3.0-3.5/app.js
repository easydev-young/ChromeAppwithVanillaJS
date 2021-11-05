// const title = document.getElementById("title1");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const title1 = document.querySelector(".hello h1");
// console.log(title1);

// const title2 = document.querySelectorAll(".hello h1");
// console.log(title2);

// const title31 = document.querySelector("#title1");
// // const title31 = document.querySelector("#title1 form");
// const title32 = document.getElementById("title1");
// console.log(title31);
// console.log(title32);

const title = document.querySelector("div.hello:first-child h1");

console.log(title);

function handleTitleClick() {
    console.log("title was clcicked!;");
    title.style.color = "blue";
}

function handleMouseEnter() {
    console.log("mouse is here");
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    console.log("mouse is gone!");
    title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI!");
}

function handleWindowOnline() {
    alert("ALL GOOD!");
}

// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;
// addEventListener를 사용하는 이유는 
// .removeEventListener를 통해서 event listener를 제거 할 수 있기 때문
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);