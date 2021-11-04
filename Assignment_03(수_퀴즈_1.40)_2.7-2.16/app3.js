// const age = prompt("How old are you?");
// console.log(age);
// console.log(typeof age);

// console.log(typeof age, parseInt(age));
// console.log(typeof age, typeof parseInt(age));

const age2 = parseInt(prompt("How old are you?"));
console.log(isNaN(age2));

// if (isNaN(age2)) {
//     // condition === true
//     console.log("Please write a number");
// } else {
//     // condition === false
//     console.log("Thank you for writeing your age.")
// }

if (isNaN(age2) || age2 < 0) {
    console.log("Please write a number");
} else if (age2 < 18) {
    console.log("You are too young.");
} else if (age2 >= 18 && age2 <= 50) {
    console.log("You can drink");
} else if (age2 > 50 && age2 <= 80) {
    console.log("You should exercise");
} else if (age2 > 80) {
    console.log("You can do whatever you want.");
} else if (age2 !== 100) {
    console.log("wow you are wise");
} else {
    console.log("You can't drink");
}