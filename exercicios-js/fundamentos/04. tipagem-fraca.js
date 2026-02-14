// O JavaScript possui Tipagem Dinâmica e Fraca.
// Dinâmica: Não precisamos declarar o tipo (o JS identifica pelo valor).
// Fraca: Permite mudanças de tipos de forma muito flexível.

let qualquer = 'Legal';
console.log(qualquer);
console.log(typeof qualquer); // Retorna 'string'

qualquer = 3.1516;
console.log(qualquer);
console.log(typeof qualquer); // Retorna 'number'

// DICA: Evite nomes genéricos e siglas para variáveis. 
// O nome deve ser claro sobre o que o dado representa.
let valor = '';
let numero = 1;
let empresaSede = true; // Em vez de 'nm'