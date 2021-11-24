const clockTitle = document.querySelector(".js-clock");

const christmas = new Date("2021-12-25:00:00:00+0900");

function changeDday() {
    const date = new Date();
    const diff = christmas - date;

    const day = 24 * 60 * 60 * 1000;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;

    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / hour);
    const minutes = Math.floor((diff % hour) / minute);
    const seconds = Math.floor((diff % minute) / 1000);

    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(changeDday, 1000);
changeDday();