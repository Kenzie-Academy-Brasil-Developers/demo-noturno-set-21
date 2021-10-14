/**
 * Funções são sempre declaradas da seguinte maneira:
 * function <nome-da-função> (<parâmetros>) {
 * 
 * }
 */
function soma(primeiroValor, segundoValor) {
    //os parâmetros "primeiroValor" e "segundoValor" poderão ser usados dentro da função como se fossem variáveis.
    let resultado = primeiroValor + segundoValor;

    //a palavra chave "return" indica o retorno direto da função.
    //nesse caso, estamos retornando o resultado do nosso calculo.
    return resultado;
}

//Para fazer a chama da função criada, sempre usamos:
//<nome-da-função>(<parâmetros>)
//O valor passado dentro do parênteses será o valor dos parâmetros dentro da função.
let resPrimeiraSoma = soma(5, 3);
let resSegundaSoma  = soma(8, 5);
let resTerceiraSoma = soma(13, 59487);



/**
 * Arrays
 * Sempre começa de 0 na indice;
 */
let frutas = ['banana', 'maca', 'uva'];
let indice = 2;

console.log(frutas[0]) //Retorna "banana";
console.log(frutas[indice]) //Retorna "uva"


let arrayBidimensional = [
    [
        10,20,30
    ], [
        5,10,15
    ],
]

// console.table(arrayBidimensional);
// console.log(arrayBidimensional[0])       //Retorna [10,20,30];
// console.log(arrayBidimensional[0][0])    //Retorna 10;

/**
 * Objetos
 */
let victor = {
    nome: "Victor Augusto da Silva Lima",
    idade: 18,
    profissao: "Supervisor de Ensino"
};

let pokemon1 = {
    nome: "Pichu",
    tipo: "Elétrico",
    evolucao: ["Pikachu", "Raichu"],
    ataques: [
        {nome: "Choque do Trovao"}
    ]
}

//console.log(pokemon1.nome)        //retorna "Pichu"
//console.log(pokemon1.evolucao)    //retorna ["Pikachu", "Raichu"]
//console.log(pokemon1.evolucao[0]) //retorna "Pikachu"