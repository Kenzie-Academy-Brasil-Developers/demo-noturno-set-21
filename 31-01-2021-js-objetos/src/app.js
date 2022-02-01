
// carro.qtdPortas = 2;
// carro.cor = 15;
// carro["arCondicionado"] = false;
// carro["air Bag"] = true;
// carro.air Bag = true; //retorna erro;


// let atributoHaSerAcessado = "marca";

// if (carro.qtdPortas == 2) {
//     atributoHaSerAcessado = "nome";
// }

// console.log(carro[atributoHaSerAcessado]);




// const meuArray = [
//     {nome: "Victor", idade: 24},
//     {nome: "Guilherme", idade: 18},
// ]

// meuArray[1].nome = "Paulo"



/**
 * SPREAD => ...
 */
const conjuntoValores = [1,2,3,4,5,6,7]

const meuSegundoArray = ["teste", "feijão", ...conjuntoValores];
meuSegundoArray.push("batata")



const carro = {
    qtdPortas: 4,
    cor: "Azul",
    arCondicionado: true,
    nome: "Kenzie Car",
    marca: "Kenzie",
    mostraValor: function(atributo) {
        console.log(this[atributo]);
    },
    buzina: function() {},
    abriPorta: function() {},
    fechaPorta: function() {}
}

const caminhao = {
    ...carro,
    qtdEixos: 2,
    tipoCarga: "lorem ipsum",
    cor:"verde",
}

/**
 * Descontrução
 */
// const qtdEixos = caminhao.qtdEixos;
// const tipoCarga = caminhao.tipoCarga;
// = 
let { qtdEixos, tipoCarga } = caminhao;
tipoCarga = "teste";

let [ primeiroValor, segundoValor ] = [1, 2, 3, 4, 5]



const { Produto } = require('./models/Produto');

















