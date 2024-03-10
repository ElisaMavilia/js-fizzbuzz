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


let numSquares = 100;
let tmpHtml =""; 

//Prendo un elemento id dall'html //
const squaresContainer = document.getElementById("squares-container");
console.log(squaresContainer);


// procedo con il ciclo per creare i quadrati (100) //
for(let i = 1; i <= numSquares; i++){
    console.log(i);
    let square = document.createElement("div"); /* con createElement creo un div denominato square */
    
    square.setAttribute("class", "single-square", "fizzbuzz", "fizz", "buzz", "white", "normal", "second-square"); /* al div square assegno un attributo con setAttrute: inizio con class e proseguo con il nome delle classi create sul css */
    square.innerHTML = i; /* modifico l'html di square stampando i numeri da 1 a 100 */
    squaresContainer.appendChild(square); /* square diventa figlio dell'id squares-container */


// creo le condizioni //
    if((i % 3 == 0) && (i % 5 == 0)){
        square.innerHTML = "FizzBuzz";
        square.classList.add("fizzbuzz");
       
     } else if(i % 5 ===0){
         square.innerHTML = "Buzz", "white";
         square.classList.add("buzz");

     } else if( i % 3 ===0){
        square.innerHTML = "Fizz";
        square.classList.add("fizz");

     } else {
        square.innerHTML = i;
        square.classList.add("normal", "white"); 
     }
}


