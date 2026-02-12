// O operador 'typeof' identifica o tipo de dado de um valor ou variável.

// 1. Tipo: NUMBER
// Diferente de outras linguagens, o JS não separa inteiros (int) de reais (float).
let idade = 31;
console.log(typeof 31);    // number
console.log(typeof idade); // number

let salario = 4578.32;
console.log(typeof salario); // number

// 2. Tipo: BOOLEAN
// Representa valores lógicos: Verdadeiro (true) ou Falso (false).
let estaChovendo = true;
console.log(typeof estaChovendo); // boolean

// 3. Tipo: STRING
// Sequências de caracteres delimitadas por "" ou ''.
console.log(typeof "Teste"); // string