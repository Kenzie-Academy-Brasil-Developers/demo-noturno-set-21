/** Operadores Matematicos
 * + => Soma
 * - => Subtração
 * / => Divisão
 * * => Multiplicação
 * % => Mod
 */

/** Operadores Comparações
 * ==  => Igual
 * === => Identico
 * !=  => diferente
 * !== => Nao identico
 * >   => Maior que
 * <   => Menor que
 * >=  => Igual OU maior que
 * <=  => Igual OU menor que
 */


// let idade = 18;

// idade !== "18"   //retorna true
// idade != 20      //retorna true
// idade == 18;     //retorna true
// idade === 18;    //retorna true
// idade > 18;      //retorna false
// idade < 18;      //retorna false
// idade >= 18;     //retorna true

// "10" == "10";   //true
// 10 == "10";     //true
// 10 == 10;       //true

// 10 === 10       //true
// 10 === "10"     //false

/** Operadores Lógicos
 * && => E, and
 * || => Ou, or
 */

/**
 * Exemplo de condições:
 */
 let idade = 20;
 let experiencia = 1;
 let carteira = "C";

//Pode dirigir se tiver 18 anos ou mais;
let podeDirigir = idade >= 18;

//Pode dirigir com carteira C se tiver um ano de experiência e mais de 18 anos
let podeDirigirVans = experiencia >= 1 && idade > 18;

//Para tirar o EAR.
// Tem que ter a carteira no minimo "C" ou "D"
// Tem que ter 2 anos de experiencia
// Tem que ter mais de 18 anos
let podeDirigirEAR = experiencia >= 2                       //false
                     && idade > 18                          //true
                     && carteira == "C" || carteira == "D"; //true

    
// console.log(podeDirigirEAR); // retornará false

/**
 * Estruturas de decisão
 * SE...SENÃO => if...else
 */
let condicao = idade >= 18

if (condicao) {
    //Se a condição for atendida, entrará aqui
    // console.log("Maior de idade");
} else {
    //Senão, entrará aqui
    // console.log("Menor de idade");
}

/**
 * Estruturas de decisão
 * SE...SENÃO SE...SENÃO => if...else if...else
 */
if (idade >= 18) {
    //Se a condição for atendida, entrará aqui
    // console.log("Adulto");
} else if (idade >= 14 && idade < 18) {
    //Senão, se for entre 13 e 18 entrará aqui
    // console.log("Adolescente");
} else {
    //Senão, entrará aqui
    // console.log("Criança")
}

/**
 * Estruturas de decisão
 * Diferença entre encadear IF/ELSE ou fazer IFs separados
 * compare as duas soluções
 */

let VIP = true;
let podeEntrar = false;

// if (podeEntrar === true) {
//     console.log("Pode entrar");
// } else if (VIP === true) {
//     console.log("é VIP")  
// } else {
//     console.log("Não pode entrar")
// }

// if (podeEntrar === true) {
//     console.log("Pode entrar");
// }
// if (VIP === true) {
//     console.log("é VIP")  
// } 
// if (podeEntrar === false) {
//     console.log("Não pode entrar")
// }


