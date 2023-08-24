/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65*/

//Il numero di chilometri da percorrere
const km = Number(prompt('Quanti chilometri devi percorrere?'));
console.log('I chilometri da percorrere sono:' + km);
//Età del passeggero
const age = Number(prompt('Scrivi qui i tuoi anni'));
console.log('La tua età è:' + age);
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
const priceTicket = 0.21;

let totalPrice = (km * priceTicket);
console.log('Il costo del biglietto è:€ ' + totalPrice.toFixed(2));

//va applicato uno sconto del 20% per i minorenni
if(age <= 18 ) {
    totalPrice = totalPrice - (totalPrice * 0.2)
    console.log('Il prezzo da pagare dopo uno sconto del 20% è: €'+ totalPrice.toFixed(2));
} //va applicato uno sconto del 40% per gli over 65*/ 
    else if (age >= 65) {
    totalPrice = totalPrice - (totalPrice * 0.4)
    console.log('Il prezzo da pagare dopo uno sconto del 40% è: €'+ totalPrice.toFixed(2));
}
