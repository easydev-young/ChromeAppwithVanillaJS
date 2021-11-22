const gameForm = document.querySelector(".random-number-game");
const maxNumber = document.querySelector(".max-number");
const guessNumber = document.querySelector(".guess-number");
const choseNumber = document.querySelector(".chose-number");
const gameResult = document.querySelector(".game-result");

const HIDDEN_CLASSNAME = "hidden";

function playGame(yourNumber, range) {
    const machineChose = Math.round(Math.random() * range);

    choseNumber.innerText = `You chose: ${yourNumber}, the machine chose: ${machineChose}.`;

    if (yourNumber === machineChose) {
        gameResult.innerText = "😎You won!";
    } else {
        gameResult.innerText = "😭You lost!";
    }

    choseNumber.classList.remove(HIDDEN_CLASSNAME);
    gameResult.classList.remove(HIDDEN_CLASSNAME);
}

function onGameSubmit(event) {
    event.preventDefault();

    const range = parseInt(maxNumber.value, 10);
    const yourNumber = parseInt(guessNumber.value, 10);

    if (isNaN(yourNumber) === false && isNaN(range) === false) {
        playGame(yourNumber, range);
    }
}

gameForm.addEventListener("submit", onGameSubmit);
