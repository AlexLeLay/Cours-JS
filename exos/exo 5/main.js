const clockMinutes = document.querySelector("#clock > .minutes");
const clockHours = document.querySelector("#clock > .hours");
const timerMinutes = document.querySelector("#timer > .minutes");
const timerHours = document.querySelector("#timer > .hours");
const btn = document.getElementById("btn");
const alertMessage = document.getElementById("alert");
const star = document.getElementById("star");

const maxMinutes = 59;
const maxHours = 23;

let minutes = 0;
let hours = 0;
let timerHour = 0;
let timerMinute = 0;

function clockRun() {
    
    setInterval(function() {
        minutes++;

        if (minutes > maxMinutes) {
            minutes = 0;
            hours++;
        }
        const displayMinute = minutes.toString();
        const displayHour = hours.toString();

        clockMinutes.innerHTML = updateTime(minutes, 10, displayMinute);

        if (hours > maxHours) {
            hours = 0;
        }
        
        clockHours.innerHTML = updateTime(hours, 10, displayHour);

        if (minutes === timerMinute && hours === timerHour && alarmSet) {
            alertMessage.textContent = "!!! REVEILLE TOI !!!";
        }
        
    }, 1000)
}

clockRun();



timerMinutes.addEventListener("click", function() {
    timerMinute++;
    if (timerMinute > maxMinutes) {
        timerMinute = 0;
    }
    const displayMinute = timerMinute.toString();

    timerMinutes.innerHTML = updateTime(timerMinute, 10, displayMinute);
})

timerHours.addEventListener("click", function() {
    timerHour++;
    if (timerHour > maxHours) {
        timerHour = 0;
    }
    const displayHour = timerHour.toString();

    timerHours.innerHTML = updateTime(timerHour, 10, displayHour);

})

let alarmSet = false;

btn.addEventListener("click", function() {
    alarmSet = !alarmSet;
    const displayHour = timerHour.toString();
    const displayMinute = timerMinute.toString();
    if (alarmSet) {
        timerHour = 0;
        timerMinute = 0;
        timerHours.innerHTML = displayHour.padStart(2,"0");
        timerMinutes.innerHTML = displayMinute.padStart(2,"0");
    }
    star.classList.toggle("show");
})

function updateTime(value, max, element) {
    return value < max ? element.padStart(2,"0") : element;
}