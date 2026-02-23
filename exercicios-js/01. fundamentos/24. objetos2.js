// Objeto vs Função

console.log(typeof Object);          // function
console.log(typeof new Object());    // object (instanciado via função construtora)

const Cliente = function() {};
console.log(typeof Cliente);         // function
console.log(typeof new Cliente());   // object

// ES6 (2015): A palavra 'class' é um atalho (Syntactic Sugar) para criar funções.
class Produto {}
console.log(typeof Produto);         // function
console.log(typeof new Produto());   // object

/* Processo: 
   1. Você define o molde (Função ou Classe).
   2. Você gera a instância (Objeto) usando a palavra 'new'. */