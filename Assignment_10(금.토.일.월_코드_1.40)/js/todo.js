const toDoFrom = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

// function paintToDo(newTodo) {
//     // console.log("i will paint", newTodo);

//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     const button = document.createElement("button");

//     button.innerText = "❌";
//     button.addEventListener("click", deleteToDo);

//     li.appendChild(span);
//     li.appendChild(button);
//     span.innerText = newTodo;

//     console.log(li);

//     toDoList.appendChild(li);
// }

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    console.log(li);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);
    const newTodo = toDoInput.value;

    toDoInput.value = "";
    // console.log(newTodo, toDoInput.value);

    // toDos.push(newTodo);
    // paintToDo(newTodo);
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);

    saveToDos();
}

toDoFrom.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);
    toDos = parsedToDos;
    // parsedToDos.forEach(sayHello);
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    parsedToDos.forEach(paintToDo);
}