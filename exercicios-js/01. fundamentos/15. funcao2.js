// Armazenando uma função dentro de uma variável (Function Expression)
const imprimirSoma = function (a, b) { // Função anônima (sem nome próprio)
    console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenando uma Função Arrow em uma variável (Arrow Function)
// A sintaxe é reduzida: retira-se a palavra 'function' e usa-se a seta =>
const soma = (a, b) => {
    return a + b;
};

console.log(soma(2, 3));

// Retorno Implícito
// Ideal para funções de uma única linha. 
// Não utiliza chaves { } nem a palavra 'return'.
const subtracao = (a, b) => a - b; 

console.log(subtracao(10, 5));

// Arrow Function com apenas um parâmetro:
// Podemos omitir os parênteses do parâmetro se houver apenas um.
const imprimir2 = a => console.log(a);

imprimir2('Aprender Arrow Functions é essencial!');