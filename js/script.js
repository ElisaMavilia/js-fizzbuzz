/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
*Consigli del giorno:*
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
*BONUS 2:*
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. 
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */


/* TEMPLATE FOR HTML

<div class=

// Divisione: n % 3 ===0 ; n % 5 ===0

/* const squareContainer = document.createElement('div');

squareContainer.className = `d-flex justify-content-center align-content-center gap-2;`

squareContainer.setAttribute("container", "square");
console.log (squareContainer);
 
let numSquares = 100;
let tmpHtml = "";
let multiple3 = numSquares % 3 ===0;
let multiple5 = numSquares % 5 ===0;

for (let i = 0; i >=100; i++){
    tmpHtml += `<div class="square">${i + 1}</div>`;
}

squareContainer.innerHTML = tmpHtml;

const container = document.querySelector('.container');
container.append(squareContainer); */

const squaresContainer = document.createElement(`div`);
squaresContainer.className = "d-flex justify-content-between align-items-center";

console.log(squaresContainer);

squaresContainer.setAttribute("class", "single-square");

let numsquares = 100;
let tmpHtml ="";

for(let i = 0; i >=numSquares; i++){
    
}

const wrapper = document.querySelector(`.squares-container`);
wrapper.append(squaresContainer);
console.log(wrapper);