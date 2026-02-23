// Destructuring em parâmetros de função (Objeto)

function rand({ min = 0, max = 1000 }) {
    // O operador {} aqui desestrutura o objeto passado como argumento,
    // extraindo diretamente 'min' e 'max'.
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj));      // Passando objeto pronto
console.log(rand({ min: 955 })); // Passando apenas um atributo (o outro usa o padrão)
console.log(rand({}));       // Passando objeto vazio (usa todos os padrões)
// console.log(rand());      // ERRO: Tenta desestruturar algo que é undefined.