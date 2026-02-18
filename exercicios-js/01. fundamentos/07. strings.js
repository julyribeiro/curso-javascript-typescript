// String: Cadeia de caracteres (Texto).
const escola = "Escola";

// Métodos Úteis:
console.log(escola.charAt(4));     // Retorna o caractere no índice 4 (começa do 0)
console.log(escola.charCodeAt(3)); // Retorna o valor do caractere na tabela Unicode/ASCII
console.log(escola.indexOf('o'));  // Encontra o índice da letra especificada

console.log(escola.substring(1));       // Retorna do índice 1 em diante
console.log(escola.substring(0, 3));    // Retorna do índice 0 até o 3 (sem incluir o 3)

console.log('Escola '.concat(escola).concat("!")); // Concatenação via método
console.log('Escola ' + escola + "!");             // Concatenação via operador '+' (Mais comum)

console.log(escola.replace('o', 'O'));    // Substitui o primeiro caractere encontrado
console.log(escola.replace(/\w/g, 'e')); // Substituição global usando Regex (Expressão Regular)

console.log('Ana,Maria,Pedro'.split(',')); // Converte a string em um Array/Lista