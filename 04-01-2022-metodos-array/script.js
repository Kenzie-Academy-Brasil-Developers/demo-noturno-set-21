/*********
 *
 * MÉTODOS DE ARRAY
 *
 ********/

// Métodos já conhecidos
// LENGTH
// PUSH

// POP - método que retira o último elemento do Array

let numeros = [
  6, 3, 9, 105, 236, 95, 65, 15, 168, 632, 245, 36, 98, 875, 546, 854,
];

// é possível salvar o elemento retirado em uma variável
let elementoRetirado = numeros.pop();

console.log(numeros);
console.log(elementoRetirado);

// INCLUDES
// SORT
// FILTER
// REDUCE
// MAP
// FOREACH

/**
 * INCLUDES - retorna um booleano (true ou false)
 */

console.log(numeros.includes(168));

/**
 * SORT - Altera o array original
 */

// sintaxe de função
function comparaNumeros(a, b) {
  return a - b;
}
// Semelhante a anterior
// const comparaNumeros = (a, b) => {
//   return a - b;
// };

numeros.sort(comparaNumeros);

console.log(numeros);

const nomes = [
  "Barbara",
  "William",
  "Guilherme",
  "alex",
  "Victor",
  "Fabio",
  "Alan",
];

// Sintaxe de função introduzido no ES6 (mais moderno, rs)
const comparaNomes = (a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
};

nomes.sort(comparaNomes);

console.log(nomes);

/**
 * FILTER - Retorna um novo array
 */

let numerosFiltrados = numeros.filter((elementoAtual) => {
  return elementoAtual > 200 && elementoAtual < 650;
});

console.log(numerosFiltrados);

// A função callback pode ser criada fora do método ou criada como parâmetro, utilizando
// a sintaxe de arrow function ou função anônima
let nomesFiltrados = nomes.filter((elemento) => {
  return elemento.toLowerCase().startsWith("a");
});

// O código abaixo tem o mesmo resultado que o de cima
// let nomesFiltrados = nomes.filter(function(elemento) {
//     return elemento.toLowerCase().startsWith("a");
// });

console.log(nomesFiltrados);

/**
 * REDUCE - retorna um valor único que varia de acordo com a lógica
 **/

function somaValores(acumulador, elementoAtual) {
  return acumulador + elementoAtual;
}

let somaTotalNumeros = numeros.reduce(somaValores);
console.log(somaTotalNumeros);

let menorNumero = numeros.reduce(function (acumulador, elementoAtual) {
  if (acumulador > elementoAtual) {
    acumulador = elementoAtual;
  }
  return acumulador;
});
console.log(menorNumero);

/**
 * FOREACH e MAP
 **/
