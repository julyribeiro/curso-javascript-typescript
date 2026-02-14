// Variáveis e Constantes

// var: Forma mais antiga de declarar variáveis. Possui comportamentos específicos de escopo.
var a = 3;

// let: Forma moderna de declarar variáveis. Evita erros de escopo (Recomendado).
let b = 4;

// Reatribuição: Podemos mudar o valor de 'let' e 'var' sem precisar declarar novamente.
b = 40; 
a = 300;
b = 400;

console.log(a, b);

// const: Declara uma constante. O valor é fixo e NÃO permite reatribuição após definido.
const c = 5; 
// c = 50; // Geraria um erro!

// Regra de ouro: Tudo que não precisar mudar de valor, utilize 'const'.