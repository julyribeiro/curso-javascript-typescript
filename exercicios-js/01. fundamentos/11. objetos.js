// Objeto em JS
// Um objeto é uma coleção dinâmica de pares chave e valor.
// Diferente de um Array (que é uma lista indexada), o objeto é uma estrutura de atributos.

// Criação de um objeto vazio e atribuição dinâmica:
const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // Atributo com espaço (evitar essa prática por dificultar o acesso)

console.log(prod1);

// Criação literal (já com valores e aninhamento):
const prod2 = {
    nome: 'Computador',
    preco: 5000.00,
    descontoLegal: 0.40,
    obj: {
        blabla1: 123,
        obj: { // Objetos podem ser aninhados infinitamente
            blabla2: 456
        }
    }
};

console.log(prod2);

/* DIFERENÇA PARA O JSON:
   - Objeto JS: É uma estrutura de dados viva no código.
   - JSON: JavaScript Object Notation. É um formato de DADOS (texto).
   - No JSON, as chaves e os valores de texto DEVEM usar aspas duplas.
   Exemplo de JSON: { "nome": "Computador", "preco": 5000.00 }
*/