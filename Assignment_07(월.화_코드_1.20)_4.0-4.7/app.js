const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// const link = document.querySelector("a");

// function onLoingSubmit() {
//     const username = loginInput.value;
//     console.log(username);
// }

function onLoingSubmit(tomato) {
    tomato.preventDefault(); //preventDefault는 브라우저의 기본 동작을 막아줌
    // console.log(tomato);
    // console.log(loginInput.value);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // console.log(username);
    // greeting.innerText = "Hello " + username;    
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = `Hello ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.log(event);
//     alert("clicked!");
// }

// loginForm.addEventListener("submit", onLoingSubmit);
// link.addEventListener("click", handleLinkClick);
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//     // console.dir(loginInput);
//     const value = loginInput.value;
//     if (value === "") {
//         alert("Please write your name");
//     } else if (value.length > 15) {
//         alert("Your name is too long.");
//     }

//     console.log("hello", value);
// }

// loginButton.addEventListener("click", onLoginBtnClick);

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoingSubmit);
} else {
    // show the greetings
    paintGreetings();
}