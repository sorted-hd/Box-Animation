let timeOut = null;
const barHolder = document.getElementsByClassName("bar-holder");
const bars = barHolder[0].querySelectorAll("div");

const play = () => {
    const timer = () => {
        for (const bar of bars) {
            bar.style.height = `${Math.floor(Math.random() * 100)}%`;
        }
    }
    timeOut = setInterval(timer, 1000);
}

const pause = () => {
    if (timeOut) {
        clearInterval(timeOut);
    }
}

const buttonStart = document.getElementById("controls__start");
buttonStart.addEventListener("click", play);

const buttonStop = document.getElementById("controls__stop");
buttonStop.addEventListener("click", pause);