const calcultor2 = {
    add: function (a, b) {
        alert(a + b);
    },
    minus: function (a, b) {
        alert(a - b);
    },
    div: function (a, b) {
        alert(a / b);
    },
    multi: function (a, b) {
        alert(a * b);
    },
    power: function (a, b) {
        alert(a ** b);
    },
};

// calcultor2.add(5, 1);
// calcultor2.minus(3, 2);
// calcultor2.div(4, 7);
// calcultor2.multi(5, 2);
// calcultor2.power(2, 8);


const age = 18;
function calculateKrAge(ageOfForegner) {
    return ageOfForegner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);