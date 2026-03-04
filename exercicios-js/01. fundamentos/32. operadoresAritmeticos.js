// Operadores Aritméticos: Operadores binários que atuam sobre dois operandos.

const [a, b, c, d] = [3, 5, 1, 15]; // Destructuring para criar variáveis rapidamente.

const soma = a + b + c + d; 
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2; // Resto da divisão (Útil para saber se um número é par ou ímpar).

console.log(soma, subtracao, multiplicacao, divisao, modulo);

// Curiosidade: Operadores podem ser:
// Unário: ++a (um operando)
// Binário: a + b (dois operandos)
// Ternário: a ? b : c (três operandos)