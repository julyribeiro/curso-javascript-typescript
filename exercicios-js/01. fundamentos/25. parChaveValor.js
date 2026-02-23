// Par Chave/Valor (Identificador/Valor)
const saudacao = 'Opa'; // Contexto Léxico 1: Nível Global do arquivo.

// Contexto Léxico: É o local físico no código onde a variável foi declarada.
// O motor do JS busca a variável no contexto mais próximo e vai subindo até o global.

function exec() {
    const saudacao = 'Falaaa'; // Contexto Léxico 2: Escopo local da função.
    return saudacao;
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 29,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123 // Chaves iguais em objetos diferentes não conflitam.
    }
};

console.log(saudacao); // Busca no contexto global.
console.log(exec());   // Retorna o valor do contexto interno da função.
console.log(cliente);