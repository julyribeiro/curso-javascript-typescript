// Booleanos
// O JS aceita os valores literal true/false, mas também entende que outros 
// valores podem se comportar como verdadeiro ou falso (Truthy/Falsy).

let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// O JS é dinâmico, mas para checar o valor lógico de algo que não é boolean:
isAtivo = 1;
console.log(!!isAtivo); // A negação dupla (!!) força a conversão para boolean

// NEGAÇÃO DE UM RESULTADO BOOLEAN
// ! (uma negação): Inverte a lógica (true vira false e vice-versa).
// !! (duas negações): Volta para o valor lógico original.

console.log('Os que se comportam como VERDADEIROS (Truthy):');
console.log(!!3);           // Números inteiros (exceto 0)
console.log(!!-1);          // Números negativos
console.log(!!' ');         // String com espaço
console.log(!!'texto');     // Strings com qualquer conteúdo
console.log(!![]);          // Arrays (mesmo vazios)
console.log(!!{});          // Objetos (mesmo vazios)
console.log(!!Infinity);    // Tipo infinito
console.log(!!(isAtivo = true)); // O resultado da atribuição

console.log('Os que se comportam como FALSOS (Falsy):');
console.log(!!0);           // O número zero
console.log(!!'');          // Strings vazias
console.log(!!null);        // Nulo
console.log(!!NaN);         // Not a Number (Não é um número)
console.log(!!undefined);   // Indefinido
console.log(!!(isAtivo = false)); // O resultado da atribuição se o valor for falso

console.log('Casos práticos:');
// O operador || (OU) retorna o primeiro valor verdadeiro encontrado
console.log(!!('' || null || 0 || ' ')); // Resulta em true (devido ao espaço)

// Exemplo clássico de valor padrão:
let nome = '';
console.log(nome || 'Desconhecido'); // Se 'nome' for vazio (falso), exibe 'Desconhecido'