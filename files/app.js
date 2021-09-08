const day = document.querySelector("#days");
const hour = document.querySelector("#hours");
const minute = document.querySelector("#minutes");
const second = document.querySelector("#seconds");
const DueTime = new Date("January 5, 2030 17:25:25");
//setting the timer//
function Timer() {
    const now = new Date();
    const diff = DueTime - now;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    day.innerHTML =  d < 10 ? "0" + d : d ;
    hour.innerHTML = h < 10 ? "0" + h : h ;
    minute.innerHTML = m < 10 ? "0" + m : m ;
    second.innerHTML = s < 10 ? "0" + s : s ;
};
//setting the interval//
setInterval(Timer,1000)