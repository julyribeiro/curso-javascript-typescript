// Destructuring (Objeto): Extrai dados de um objeto de forma simples.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

// Tire 'nome' e 'idade' do objeto 'pessoa':
const { nome, idade } = pessoa;
console.log(nome, idade);

// Extraindo e renomeando as variáveis:
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// Atributos inexistentes ou com valor padrão:
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada); // undefined, true

// Extraindo dados de objetos aninhados:
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);

// const { conta: { {ag, num } } }
// ATENÇÃO: Desestruturar caminhos inexistentes (ex: pessoa.conta.ag) gera erro.