// Regex - RegExp: Regular Expression

/***
 * JSON = Javascript Object Notation
 ***/

const nome = {
  name: "Luciano",
};

console.log("Objeto JS", nome);

const adicionaSobrenome = (chave, valor) => {
  console.log(valor);
  return valor.name + " Huck";
};

let nomeJson = JSON.stringify(nome, adicionaSobrenome);

console.log("JSON", nomeJson);

let nomeDesserializado = JSON.parse(nomeJson);

console.log("nome desserializado", nomeDesserializado);

/***
 * IMPORT E EXPORT
 ***/

// Todos os imports DEVEM ficar no topo da página
// Esses imports ficarão aqui apenas por questão didática
const produtos = require("./data/dados");
const { calculaValor, pegaValor } = require("./functions/funcao");

let produtoCalculado = produtos.map(calculaValor);

console.log(produtoCalculado);

let valoresProdutos = produtos.map(pegaValor);

console.log(valoresProdutos);
