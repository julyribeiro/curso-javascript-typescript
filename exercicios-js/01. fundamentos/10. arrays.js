// Arrays
// Em JS, o array é uma estrutura heterogênea (aceita diferentes tipos de dados), 
// flexível (cresce e diminui) e é considerado um Objeto.
// A indexação começa sempre no índice 0.

const valores = [7.7, 8.9, 6.3, 9.2];
// Índices:       0 ,  1 ,  2 ,  3 

console.log(valores[0], valores[3]);
console.log(valores[4]); // Acessar um índice inexistente retorna 'undefined' (não gera erro)

// Alterando ou adicionando valores:
valores[3] = 8;
valores[4] = 10;
console.log(valores);

// Propriedade length: Indica a quantidade de elementos no array.
console.log("Quantidade de elementos:", valores.length);

// Métodos de manipulação:

// .push(): Adiciona elementos ao final do array. 
// (Embora aceite misturar tipos, não é uma boa prática)
valores.push({id: 3}, false, null, 'teste');
console.log(valores);

// .pop(): Remove e retorna o último elemento do array.
console.log("Removido com pop:", valores.pop());
console.log(valores);

// delete: Remove o valor do índice, mas mantém a posição como 'empty' (vazia).
delete valores[0];
console.log(valores);

console.log(typeof valores); // Em JavaScript, Array é um Objeto!