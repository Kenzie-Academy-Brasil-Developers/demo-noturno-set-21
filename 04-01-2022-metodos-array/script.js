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

// console.log(numeros);
// console.log(elementoRetirado);

// INCLUDES
// SORT
// FILTER
// REDUCE
// MAP
// FOREACH

/**
 * INCLUDES - retorna um booleano (true ou false)
 */

// console.log(numeros.includes(168));

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

// console.log(numeros);

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

// console.log(nomes);

/**
 * FILTER - Retorna um novo array
 */

let numerosFiltrados = numeros.filter((elementoAtual) => {
  return elementoAtual > 200 && elementoAtual < 650;
});

// console.log(numerosFiltrados);

// A função callback pode ser criada fora do método ou criada como parâmetro, utilizando
// a sintaxe de arrow function ou função anônima
let nomesFiltrados = nomes.filter((elemento) => {
  return elemento.toLowerCase().startsWith("a");
});

// O código abaixo tem o mesmo resultado que o de cima
// let nomesFiltrados = nomes.filter(function(elemento) {
//     return elemento.toLowerCase().startsWith("a");
// });

// console.log(nomesFiltrados);

/**
 * REDUCE - retorna um valor único que varia de acordo com a lógica
 **/

function somaValores(acumulador, elementoAtual) {
  return acumulador + elementoAtual;
}

let somaTotalNumeros = numeros.reduce(somaValores);
// console.log(somaTotalNumeros);

let menorNumero = numeros.reduce(function (acumulador, elementoAtual) {
  if (acumulador > elementoAtual) {
    acumulador = elementoAtual;
  }
  return acumulador;
});
// console.log(menorNumero);

/**
 * FOREACH
 **/

const produtos = [
  {
    produto: "Televisão",
    precoOriginal: 1990.0,
    desconto: 0.05,
    categoria: "eletrônico",
  },
  {
    produto: "Home theater",
    precoOriginal: 990.0,
    desconto: 0.1,
    categoria: "eletrônico",
  },
  {
    produto: "PS5",
    precoOriginal: 4990.0,
    desconto: 0.1,
    categoria: "eletrônico",
  },
  {
    produto: "Mouse",
    precoOriginal: 99.0,
    desconto: 0.0,
    categoria: "computador",
  },
  {
    produto: "Teclado mecânico",
    precoOriginal: 299.0,
    desconto: 0.05,
    categoria: "computador",
  },
  {
    produto: "Celular Samsung",
    precoOriginal: 1299.0,
    desconto: 0.05,
    categoria: "telefonia",
  },
  {
    produto: "Celular Iphone",
    precoOriginal: 3299.0,
    desconto: 0.15,
    categoria: "telefonia",
  },
];

let produtosComPrecoComDesconto = produtos.map((produto) => {
  produto["precoComValorCalculado"] =
    produto.precoOriginal * (1 - produto.desconto);
  return produto;
});

console.log("map", produtosComPrecoComDesconto);

function printProdutos(produto) {
  const mainProduto = document.getElementById("container-principal");

  let divProduto = document.createElement("div");
  let tituloProduto = document.createElement("h3");
  let descontoP = document.createElement("p");
  let precoPDesconto = document.createElement("p");
  let categoriaP = document.createElement("p");
  let precoOriginal = document.createElement("span");

  tituloProduto.innerText = produto.produto;
  descontoP.innerText = produto.desconto;
  precoOriginal.innerText = produto.precoOriginal;
  precoPDesconto.innerText = produto.precoComValorCalculado;
  categoriaP.innerText = produto.categoria;

  divProduto.appendChild(tituloProduto);
  divProduto.appendChild(descontoP);
  divProduto.appendChild(precoOriginal);
  divProduto.appendChild(precoPDesconto);
  divProduto.appendChild(categoriaP);

  mainProduto.appendChild(divProduto);
}

produtosComPrecoComDesconto.forEach(printProdutos);
