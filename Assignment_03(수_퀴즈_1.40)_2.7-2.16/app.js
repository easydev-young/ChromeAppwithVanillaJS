function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

console.log("hello");
sayHello("Yap", 12);
sayHello("Ma", 15);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
function divide(a, b) {
    console.log(a / b);
}
plus(8, 60);
plus(14, 44);
divide(14, 44);

const player = {
    name: "yap",
    sayHello: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you")
    }
};

player.sayHello("ma");
let hello;
console.log(hello);

const calcultor = {
    add: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    div: function (a, b) {
        console.log(a / b);
    },
    multi: function (a, b) {
        console.log(a * b);
    },
    power: function (a, b) {
        console.log(a ** b);
    },
};

calcultor.add(5, 1);
calcultor.minus(3, 2);
calcultor.div(4, 7);
calcultor.multi(5, 2);
calcultor.power(2, 8);
// const를 사용하고, 가끔 내용을 변경하고 싶으면 let을 사용
// var는 사용 하지마!
// null : 비어있음
// undefined: 변수에 값을 부여하지 않은 상태
// ()는 실행한다는 뜻f