// Destructuring (Array): Extrai elementos usando colchetes [ ].

const [a] = [10]; // Cria a variável 'a' e atribui o primeiro valor do array da direita.
console.log(a);

// Extraindo múltiplos elementos e ignorando outros com a vírgula vazia:
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6); // 10, 9, undefined, 0

// Destructuring aninhado (difícil leitura, deve-se utilizá-lo com cautela):
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]; 
console.log(nota); // Pega o 6 (segundo elemento do segundo array).