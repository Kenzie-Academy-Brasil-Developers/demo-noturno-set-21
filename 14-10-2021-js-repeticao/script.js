/**
 * Estruturas de Repetição
 * 
 * While...do
 * Primeiro válida se deve continuar e depois executa o bloco de código
 */
// let idade = 18;

// while(idade < 20) {
//     console.log(idade);
//     idade = idade + 1;
// }

/**
 * do...While
 * Primeiro executa o bloco de código, depois válida se deve continuar.
 */
// let idade = 18;
// do {
//     console.log(idade);
//     idade = idade + 1;
// } while(idade < 20);

/**
 * For
 * 
 * Estrutura básica do for: for(declaracao;condicao;incremento)
 */
// for(let contador = 20;contador >= 0;contador-=2) {
//     console.log(contador);
// }


/**
 * Exemplo 1
 * Validar se a pessoa é adulta, e se não for, somar a idade até que ela seja
 */
// function areOlder(idade) {

//     let adulto = true;
//     let mensagem = "Não é adulto ainda";

//     while(idade < 18) {
//         adulto = false;
//         console.log(mensagem);
//         idade++;
//     }

//     adulto = true;
//     mensagem = "Agora é adulto"
//     console.log(mensagem)

//     return adulto;
// }

// areOlder(10);

/**
 * Exemplo 2
 * Retorna os números pares de 0 até o valor passado no parâmetro
 */
// function retornaPares(numero) {
//     // let contador = 0;

//     // while(contador <= numero) {

//     //     if (contador % 2 === 0) {
//     //         console.log(contador);
//     //     }

//     //     contador++;
//     // }

//     for (let contador = 0; contador <= numero;contador++) {
//         if (contador % 2 === 0) {
//             console.log(contador);
//         }
//     }
// }

// retornaPares(100);



/**
 * Acessando arrays com Loops
 */
// let frutas = ['banana', 'maca', 'uva'];
// let valoresKg = [10.00, 15.00, 18.00]

// for (let contador = 0;contador <= frutas.length; contador++) {
//     let mensagem = `A ${frutas[contador]} custa ${valoresKg[contador]} por KG`;

//     console.log(mensagem);
// }

/**
 * Usando Array.prototype.push() para adicionar valores no fim de um array.
 */
// function retornaNumerosPares(numero){
//     let conjuntoNumeros = [];

//     for (let contador = 0;contador <= numero; contador++) {
//         if (contador % 2 === 0) {
//             conjuntoNumeros.push(contador)
//         }
//     }

//     return conjuntoNumeros;
// }

// let numerosPares = retornaNumerosPares(20);
// console.log(numerosPares);

/**
 * Usando Array.prototype.pop() para remover um item do do fim do array. 
 */
// console.log(numerosPares.pop())
// console.log(numerosPares);









// function minhaFuncao(conjuntoNumeros){
//     console.log(conjuntoNumeros);
// }

// let meuArray = [10,20,30,40]

// minhaFuncao(meuArray)




function multiply(a,b) {
    return a * b;
}

let resultado = multiply(5*5);
resultado = multiply(resultado * 5);
resultado = multiply(resultado * 5);
resultado = multiply(resultado * 5);























