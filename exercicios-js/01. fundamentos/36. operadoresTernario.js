// Operador Ternário: Composto por 3 partes.
// expressao ? resultado_se_verdadeiro : resultado_se_falso

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.1));
console.log(resultado(6.7));

// É uma forma elegante de substituir um if/else simples.