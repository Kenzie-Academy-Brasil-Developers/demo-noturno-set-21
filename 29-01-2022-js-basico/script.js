// declarar função, pode ter parâmetro ou não
// Caso tenha parâmetro, não precisa existe a variável anteriormente
function soma(a, b) {
  let total = a + b;
  // console.log() é utilizado para debugar o código, porque não é possível utilizar os dados de saída do console na aplicação
  console.log(total);
  // para extrair os valores da função é necessário dar um return
  // se a função não tiver return, o retorno padrão é undefined
  return total;
}

// let totalDaSoma = soma(2, 3);
// console.log("Variável Soma:", totalDaSoma1);

// Lógica
// Definir dados de entrada - ARRAY, STRING, NÚMERO, OBJETO
// Processamento da função - O que a função vai fazer (dobrar todos os valores do Array)
// Definir dados de saída - Retornar o Array com valores dobrados

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
// posições = 0, 1, 2, 3, 4, 5, 6, 7
// numeros.length = 8

// a última posição é diferente do tamanho do array

// % - Módulo, retorna o resto da divisão

function comecaComB(a) {
  for (let index = 0; index < a.length; index++) {
    let palavraAtual = a[index];
    if (palavraAtual[0] === "b") {
      return true;
    }
  }
  return false;
}

let arrStr = [
  "tio",
  "netbook",
  "Lua",
  "gato",
  "churros",
  "paralelepipedo",
  "macarrão",
];

let str = "starwars";

console.log(comecaComB(arrStr));

console.log(str.split("").length);
