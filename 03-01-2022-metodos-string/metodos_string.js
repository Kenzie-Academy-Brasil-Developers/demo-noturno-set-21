/*****

MÉTODOS DE STRING

*****/

// SPLIT
// REVERSE (array)
// JOIN (array)
// TOUPPERCASE / TOLOWERCASE
// REPLACE / REPLACEALL
// SLICE / SUBTRING

let frase = "The quick brown fox jumps over the lazy brown dog.";
console.log(frase);

/**
 * SPLIT
 **/

let fraseSplitada = frase.split(" ");
console.log(fraseSplitada);

/**
 * Reverse
 **/

fraseSplitada.reverse();
console.log(fraseSplitada);

/**
 * JOIN
 **/

let fraseJoin = fraseSplitada.join(" ");
console.log(fraseComJoin);

let numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(numeros.join("+")); // "1+2+3+4+5+6+7"

/**
 * ENCADEAMENTO DE MÉTODOS
 **/

// O encadeamento de métodos é muito poderoso, o código fica mais limpo e consequentemente mais legível

let metodosEncadeados = frase.split("").reverse().join("");
console.log(metodosEncadeados);

/**
 * TOUPPERCASE E TOLOWERCASE
 **/

let valorPesquisado = "hYunDaY hb20";

let valorEmMaiuscula = valorPesquisado.toUpperCase();
let valorEmMinuscula = valorPesquisado.toLowerCase();

console.log(valorEmMaiuscula);
console.log(valorEmMinuscula);

/**
 * REPLACE e REPLACEALL
 **/

let novaFraseReplace = frase.replace("brown", "white");
console.log(novaFraseReplace);

let novaFraseReplaceAll = frase.replaceAll("brown", "white");
console.log(novaFraseReplaceAll);

/**
 * SLICE e SUBSTRING
 **/

let fraseSlice = frase.slice(5, 30);
console.log(fraseSlice);

let fraseSubstring = frase.substring(5, 30);
console.log(fraseSubstring);
