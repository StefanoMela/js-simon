// RECUPERO ELEMENTI UTILI DALL'HTML

const daysInput = document.getElementById("days");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

// RECUPERO ORE, MINUTI, SECONDI

const dateToday = new Date ();

let timeNow = dateToday.getTime();

const tomorrow = new Date (2023, 7, 24, 9, 30);

let timeTomorrow = tomorrow.getTime();

let timeMissing = timeTomorrow - timeNow;

const countdown = setInterval(function () {

    timeMissing = timeMissing - 1000;

} , 1000 );


let hours = Math.floor(timeMissing / (1000 * 60 * 60));

console.log(hours);

let mnts = timeMissing % (1000 * 60 * 60) / (1000 * 60);

console.log(mnts);

let scnds = timeMissing % (1000 * 60 * 60) % (1000 * 60) / 1000;

console.log(scnds);

// let scnd = Math.floor(timeMissing / 1000);
// let mnt = scnd / 60;
// let hrs = Math.floor(mnt / 60);
// console.log(scnd, mnt, hrs);

// console.log(timeNow);

// console.log(timeTomorrow);

// console.log(timeMissing);