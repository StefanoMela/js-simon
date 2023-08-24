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

/**
 *  METODI ALTERNATIVI: 
 * 
 *  const sToTomorrow =  Math.floor((timeMissing / 1000))
 * 
 *  const seconds = sToTomorrow % 60;
 * 
 *  const minutes = Math.floor((sToTomorrow / 60) % 60); => la prima divisione è per recuperare l'unità di misura, 
 *                                              il resto è per recuperare i 60 minuti in un'ora
 *
 * const hours = Math.floor((sToTomorrow / 60 / 60) % 24);
 * 
 * const days = Math.floor(sToTomorrow / 60 / 60 / 24); 
 * 
*/




// SET VARIABILE APPOGGIO

let Jhour = tomorrow


// SETTAGGIO COUNTDOWN

setInterval(function () {

    seconds -- ;
    hoursInput.innerText = hours
    minutesInput.innerText = minutes;
    secondsInput.innerText = seconds;
    
}, 1000);

if (Jhour =          = tomorrow) {

    clearInterval()
};