/**
 * Variáveis são sempre declaradas da seguinte maneira:
 * <tipo-de-declaracao> <nome-da-variavel> = <valor-da-variavel>;
 */
const exemplo1 = 30;
let exemplo2 = 15;

/**
 * Variáveis declaradas com LET podem ser alteradas durante o percorrer do código. 
 */
let variavelAlteravel = 30;
variavelAlteravel = 15;
variavelAlteravel = "Victor";

/**
 * Constantes declaradas com CONST NÃO podem ser alteradas durante o percorrer do código.
 */
const constanteNaoAlteravel = "Victor Augusto";
constanteNaoAlteravel = "Victor Augusto da Silva Lima"
//Se descomentar a linha de cima e executarmos o código, o JS retornará um erro falando que não podemos alterar o código.

/**
 * Tipos primitivos de variáveis (aprenderemos mais no futuro):
 * String => Palavras, letras e frases sempre escritas entre aspas duplas e simples ou entre crases. 
 * Number => Números.
 * Boolean => Representa valores booleanos, 1 ou 0, sim ou não, true ou false.
 */
let exemploString   = "Victor Augusto";
let exemploString01 = 'Victor Augusto';
let exemploString02 = `Victor Augusto`;

let exemploNumber   = 10;
let exemploNumber01 = 25.36;

let exemploBoolean  = true;
let exemploBoolean01= false;

/**
 * Usamos "console.log" para mostrar um dado na tela
 */
console.log("Meu nome é Victor");
console.log(exemploNumber);
console.log("Meu nome é " + exemploString);

