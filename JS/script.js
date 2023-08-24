// RECUPERO ELEMENTI HTML

const daysInput = document.getElementById("days");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");


/**
* COSI FACENDO ABBIAMO IL COUNTDOWN ATTIVO - AL CONTRARIO DI IERI FUNZIONA - PERO' CI SARA' SEMPRE UN SECONDO DI SCARTO AL CARICAMENTO 
* PER EVITARE SPOSTIAMO TUTTO IN UNA FUNZIONE, LEGHIAMO LA FUNZIONE AL SET INTERVAL E SOTTO LA RICHIAMIAMO
* 
*
*
*/

// function countdown() {

//     const dateToday = new Date();
//     let timeNow = dateToday.getTime();

//     // MILLISECONDI DOMANI 9:30

//     const tomorrow = new Date(2023, 7, 25, 9, 30);
//     let timeTomorrow = tomorrow.getTime();

//     // DIFFERENZA FRA I DUE NUMERI

//     let timeMissing = timeTomorrow - timeNow;

//     // VARIABILI CHE RACCOLGONO I DATI INTERI

//     let hours = Math.floor(timeMissing / (1000 * 60 * 60));

//     let minutes = Math.floor(timeMissing % (1000 * 60 * 60) / (1000 * 60));

//     let seconds = Math.floor(timeMissing % (1000 * 60 * 60) % (1000 * 60) / 1000);

//     hoursInput.innerText = hours
//     minutesInput.innerText = minutes;
//     secondsInput.innerText = seconds;
// };

setInterval(countdown, 1000);
prinTime(days, hours, minutes, seconds)

/**
*  METODI ALTERNATIVI PER CALCOLARE IL TEMPO: 
* 
*  const sToTomorrow =  Math.floor((timeMissing / 1000))
* 
*  const seconds = sToTomorrow % 60;
* 
*  const minutes = Math.floor((sToTomorrow / 60) % 60); => la prima divisione è per recuperare l'unità di misura, 
*                                                          il resto è per recuperare i 60 minuti in un'ora
*
* const hours = Math.floor((sToTomorrow / 60 / 60) % 24);
* 
* const days = Math.floor(sToTomorrow / 60 / 60 / 24); 
* 
*/

/** 
 * CREAZIONE DI VARIABILI DIVERSE A PARTIRE DALLA PRINCIPALE
*/

// funzione che calcola differenza fra date

function timeDifference(fromDate, toDate) {

    const fromMs = fromDate.getTime();
    const toMs = toDate.getTime();

    const timeDifference = Math.floor((toMs - fromMs) / 1000)

    // converto in unità leggibili
    const seconds = timeDifference % 60;
    const minutes = Math.floor((timeDifference / 60) % 60);
    const hours = Math.floor((timeDifference / 60 / 60) % 24);
    const days = Math.floor(timeDifference / 60 / 60 / 24);

    return [days, hours, minutes, seconds]; // ricavo quattro costanti da un array -- destructuring
};

// DESTRUCTURING
const [days, hours, minutes, seconds] = timeDifference(now, tomorrow);


// FUNZIONE PER STAMPARE

function prinTime (days, hours, minutes, seconds) {

    hoursInput.innerText = hours
    minutesInput.innerText = minutes;
    secondsInput.innerText = seconds;
    daysInput.innerText = days;
}