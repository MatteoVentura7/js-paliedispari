/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// Chiedere all’utente di inserire una parola
const Word = isPalindroma(prompt("inserisci una parola"))

// Stampare il risultato
console.log(Word);

// Funzione che inverte la parola inserita
 function isPalindroma(Word) {
     let isPalindroma = "";
     for(let i = Word.length - 1; i >=0; i--) {
         isPalindroma = isPalindroma + Word[i];
     }
     return isPalindroma;
 }

// Controllo che la parola inserita sia uguale a quella inversa
 if (isPalindroma(Word) === Word) {
           console.log('La parola è palidroma')
       } else {
        console.log('La parola non è palindroma')
       }
    
     
 