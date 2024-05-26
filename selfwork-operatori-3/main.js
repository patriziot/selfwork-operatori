// Primo Numero
let num1 = prompt(`Digita un numero nel campo sottostante`);
const numero1 = (+num1);
alert(`Hai scelto il numero ${num1}`);

// Secondo Numero
let num2 = prompt(`Qual è la prima cifra del numero ${num1} che hai scelto?`);
const numero2 = (+num2);

//Operazioni
console.log(`Numeri selezionati: ${numero1} e ${numero2}`);
let somma = (numero1+numero2);
let sottrazione = (numero1-numero2);
let moltiplicazione = (numero1 * numero2);
let divisione = (numero1 / numero2);
let potenza1 = (numero1 **(2));
let potenza2 = (numero2 **(2));
let potenzas = (numero1+numero2)**(2);

// Risultati
console.log(`Con i numeri da te scelti, i risultati delle varie operazioni sono: somma (${somma}); sottrazione (${sottrazione}); moltiplicazione (${moltiplicazione}); divsione (${divisione}); la potenza di ${numero1} equivale a (${potenza1}), mentre quella di ${numero2} equivale a (${potenza2}). Se vuoi sapere la potenza della somma dei due numeri, essa equivale a (${potenzas}).`)