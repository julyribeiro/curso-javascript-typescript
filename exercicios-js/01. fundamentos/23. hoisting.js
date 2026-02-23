// Hoisting = Içamento/Elevação.
// O motor do JS "move" as declarações de 'var' para o topo do escopo.

console.log('a =', a); // undefined (A variável existe, mas ainda não tem valor)
var a = 2;
console.log('a =', a); // 2

/* O que o JS faz por trás:
var a;
console.log('a =', a);
a = 2;
console.log('a =', a);
*/

// Com 'let', o hoisting NÃO ocorre da mesma forma (gera erro de referência).
// console.log('b =', b); // Erro!
let b = 2;

//  DICA: 
//  Sempre declarar as variáveis antes de usá-las, independente do hoisting.