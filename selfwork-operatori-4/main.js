let nGatti = 53;
console.log(`Numero di gatti ${nGatti}`);

let gatti_in_fila = 6;
console.log(`Gatti in fila: ${gatti_in_fila}`);

let nFile = Math.ceil(nGatti / gatti_in_fila);
console.log(`Numero di file ${nFile}`);

let avanzo = nGatti % gatti_in_fila;
console.log(`Gatti avanzati: ${avanzo}`);

let gatti_mancanti = gatti_in_fila - avanzo;
console.log(`Gatti mancanti per completare la fila: ${gatti_mancanti}`);

console.log(`Ci sono ${nFile} file di gatti e ne mancano ${gatti_mancanti} per completare una fila, con il resto di ${avanzo}.`);