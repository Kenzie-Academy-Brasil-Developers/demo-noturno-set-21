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
