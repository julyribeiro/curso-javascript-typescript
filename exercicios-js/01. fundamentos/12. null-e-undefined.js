// Atribuição por Valor vs Referência

// 1. Atribuição por Referência (Objetos, Funções, Arrays):
// A variável não guarda o objeto, mas sim o endereço de onde ele está na memória.
const a = { name: 'Teste' };
const b = a; // 'b' agora aponta para o MESMO endereço que 'a'.

b.name = 'Opa';
console.log(a.name); // Resultado: 'Opa' (Alterar 'b' afetou 'a' porque são o mesmo objeto).

// 2. Atribuição por Valor (Tipos Primitivos):
// É feita uma cópia independente do valor.
let c = 3;
let d = c;
d++; // Incrementa 'd', mas 'c' continua valendo 3.
console.log(c, d);

// UNDEFINED vs NULL
// Undefined: A variável foi declarada, mas nunca foi inicializada (o motor do JS define isso).
let valor; 
console.log(valor); // undefined

// Null: Ausência de valor. Você, como programador, define que a variável não aponta para nada.
valor = null; 
console.log(valor); // null

const produto = {};
console.log(produto.preco); // undefined (o objeto existe, mas o atributo não)

produto.preco = 3.50;
console.log(produto);

// Limpando valores:
produto.preco = undefined; // EVITE fazer isso manualmente. Use null para "limpar".
console.log(!!produto.preco); // false

delete produto.preco; // Forma correta de remover um atributo de um objeto.
console.log(produto);

produto.preco = null; // "Sem preço" ou valor vazio intencional.
console.log(!!produto.preco); // false