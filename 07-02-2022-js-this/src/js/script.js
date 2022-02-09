// var nome = "Marlon"

// const mostrarNome = () => {
//     console.log(this.nome)
// }

// function mostrarNome() {
//     console.log(this.nome)
// }

// const objPaulo      = { nome: "Paulo", minhaFunc: mostrarNome}
// const objVictor     = { nome: "Victor", minhaFunc: mostrarNome}
// const objGuilherme  = { nome: "Guilherme", minhaFunc: mostrarNome}

// objPaulo.minhaFunc()
// objVictor.minhaFunc();
// objGuilherme.minhaFunc();
// mostrarNome();

















/**
 * Variável de Contexto => "this"
 */
// class Produto {
//     constructor(id, valor, nome) {
//         this.id = id;
//         this.valor = valor;
//         this.nome = nome;
//     }

//     alert() {

//     }
// }


// Fora de escopo (GLOBAL) => "this" é o objeto "Window"
// console.log(this);





/**
 * Dentro do escopo de Objeto => "this" é a própria instância de objeto
 */
// var nome = "Victor"

// const meuObj = {
//     nome: "Paulo",
//     falarNome: function() {
//         console.log(this);
//     }
// }

// console.log(this.nome)
// meuObj.falarNome();






/**
 * Dentro do escopo de Classe => "this" é a instância de um objeto daquela classe
 */
// class Produto {
//     constructor(id, valor, nome) {
//         this.id     = id;
//         this._valor = valor;
//         this.nome   = nome;
//     }

//     set valor (newValor) {
//         this._valor = newValor
//     }

//     // alert() {

//     // }
// }

// const churros = new Produto(1, 5, "Churros");
// const batata = new Produto(2, 3, "Batata");







// function minhaFuncao() {
//     console.log(this) //Window
// }

// minhaFuncao()
// var nome = "Victor"

// const meuObj = {
//     nome: "Pedro",
//     mostrarNome: () => {
//         console.log(this.nome)
//     }
// }

// console.log(this)
// meuObj.mostrarNome()

// const valores = {
//     meuArray: [1,2,3,4],
//     multiplicaArray: function() {
//         return this.meuArray.map(() => {
//             console.log(this);
//             this.meuArray.push("teste")
//         })
//     }
// }

// valores.multiplicaArray()



// const elem = document.getElementById("myBtn");

// elem.addEventListener("click", function (event) {
//     console.log(this);
// });





// function mostrarNome() {
//     console.log(this.nome)
// }



