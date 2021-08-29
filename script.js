let timeOut = null;
let isPlayed = false;
const barHolder = document.getElementsByClassName("bar-holder");
const bars = barHolder[0].querySelectorAll("div");
const timer = () => {
    for (const bar of bars) {
        bar.style.height = `${Math.floor(Math.random() * 100)}%`;
    }
}

const play = () => {
    if (!isPlayed){
        timeOut = setInterval(timer, 1000);
        isPlayed = true;
    }
}

const pause = () => {
    if (timeOut) {
        clearInterval(timeOut);
        isPlayed = false;
    }
}

const buttonStart = document.getElementById("controls__start");
buttonStart.addEventListener("click", play);

const buttonStop = document.getElementById("controls__stop");
buttonStop.addEventListener("click", pause);