// Entendendo o Runtime (Ambiente de execução) - No caso, o Node.js.

let a = 3; // Variável local ao módulo (arquivo). Não vai para o global.

global.b = 123; // Equivalente ao 'window' do navegador.

this.c = 456; // No Node, 'this' dentro de um arquivo aponta para 'module.exports'.
this.d = false;

console.log(this.c === module.exports.c); // true
console.log(module.exports); // Exibe os itens que você exportou usando 'this'.

// VARIÁVEL MALUCA: Declarar sem let/var cria uma variável global (MÁ PRÁTICA!).
abc = 3; 
console.log(global.abc);

// DICA: Conhecer seu runtime e fugir do escopo global para evitar conflitos!