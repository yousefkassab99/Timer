
const start = document.getElementById("start")
const reset = document.getElementById("reset")
const hour = document.getElementById("hour")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const finish = document.getElementById("finish")
const setTime = document.getElementById("setTime")



reset.onclick = _ => {

    clearInterval(myinterval);
    finish.style.display = "none"  
    hour.innerText = "00";
    minutes.innerText = "5";
    seconds.innerText = "00";
    start.classList.remove("pause");
    start.classList.add("start");
    start.innerText = "start"
}

start.onclick = _ => {
    if (start.classList.contains("start")) {
        start.classList.remove("start");
        start.classList.add("pause");
        start.innerText = "pause"
        myinterval = setInterval(decrement, 1000);
    }

    else if (start.classList.contains("pause")) {
        start.classList.remove("pause");
        start.classList.add("start");
        start.innerText = "start"
        clearInterval(myinterval);
    }

}
function decrement() {
    finish.style.display = "none"  

    if (seconds.innerText > 0) {
        seconds.innerText -= 1
    } else if (seconds.innerText == 0) {
        if (minutes.innerText != 0) {
            minutes.innerText -= 1
            seconds.innerText = 59
        } else if (hour.innerText != 0) {
            hour.innerText -= 1
            minutes.innerText = 60
            seconds.innerText = 60
        } else {
            finish.style.display = "block"  
        }
    }
}

