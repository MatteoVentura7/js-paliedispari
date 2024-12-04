/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const playOddOrEven = prompt("Scegli PARI o DISPARI");
const playerChoice = playOddOrEven.toUpperCase();
const playerNumber = Number(prompt("Scegli un numero da 1 a 5"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

const computerNumber = getRandomNumber();

// Stampiamo i due numeri 

console.log('Il tuo numero è : ' ,playerNumber);
console.log('Il numero del computer è : ' ,computerNumber);

// Sommiamo i due numeri

let sum = playerNumber + computerNumber;
let message;

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function isEven(num) {
    let evenNumber = false;
    if (!(num % 2)) {
        evenNumber = true;
    } 
    return evenNumber
}

// Dichiariamo chi ha vinto.

if (isEven(sum) == true && playerChoice === "PARI") {
    message = "Hai vinto😁";
} else if (isEven(sum) == false && playerChoice === "DISPARI") {
    message = "Hai vinto😁";
} else {
    message = "Hai perso😭";
}


console.log('La tua scelta è stata :',playOddOrEven);
console.log('La somma dei numeri è :',sum);
console.log(message);



