const timersArray = [];
const play = () => {
    const barHolder = document.getElementsByClassName("bar-holder");
    const bars = barHolder[0].querySelectorAll("div");
    let timer = null;
    for (const bar of bars) {
        timer = () => {
            bar.style.height = `${Math.floor(Math.random() * 100)}%`;
        }
        const timeOut = setInterval(timer, 1000);
        timersArray.push(timeOut);
    }
}

const pause = () => {
    if (timersArray) {
        for (const timeOut of timersArray) {
            clearInterval(timeOut);
        }
    }
}

const buttonStart = document.getElementById("controls__start");
buttonStart.addEventListener("click", play);

const buttonStop = document.getElementById("controls__stop");
buttonStop.addEventListener("click", pause);