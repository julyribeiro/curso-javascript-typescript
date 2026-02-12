// DESAFIO: Inverter o valor das variáveis.
let a = 7;
let b = 94;

// Objetivo final: a = 94 e b = 7.

// Abordagem 1: Reatribuição simples (perde-se o histórico original)
// a = 94; b = 7;

// Abordagem 2: Usando variável temporária (Lógica clássica de programação)
let temp = a; // guarda o 7 na "caixa" reserva
a = b;        // 'a' recebe o 94
b = temp;     // 'b' recebe o 7 que estava guardado na reserva

console.log("Valor de A após troca: " + a);
console.log("Valor de B após troca: " + b);

// Abordagem 3 (Dica extra do professor): 
// No JS moderno, pode-se usar: [a, b] = [b, a]