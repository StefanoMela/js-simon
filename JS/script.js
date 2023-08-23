// RECUPERO ELEMENTI HTML

const daysInput = document.getElementById("days");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

// RECUPERO ORE, MINUTI, SECONDI

// MILLISECONDI ODIERNI

const dateToday = new Date();
let timeNow = dateToday.getTime();

// MILLISECONDI DOMANI 9:30

const tomorrow = new Date(2023, 7, 24, 9, 30);
let timeTomorrow = tomorrow.getTime();

// DIFFERENZA FRA I DUE NUMERI

let timeMissing = timeTomorrow - timeNow;

// VARIABILI CHE RACCOLGONO I DATI INTERI

let hours = Math.floor(timeMissing / (1000 * 60 * 60));


let minutes = Math.floor(timeMissing % (1000 * 60 * 60) / (1000 * 60));


let seconds = Math.floor(timeMissing % (1000 * 60 * 60) % (1000 * 60) / 1000);


// SETTAGGIO COUNTDOWN

setInterval(function () {

    seconds -- ;
    hoursInput.innerText = hours
    minutesInput.innerText = minutes;
    secondsInput.innerText = seconds;
}, 1000);

clearInterval(tomorrow);