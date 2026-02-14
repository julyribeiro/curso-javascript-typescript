// DADOS LITERAIS (Valores diretos no código)
console.log("Caneta");   // String (texto)
console.log(10);        // Number (inteiro/literal)
console.log(6.4);       // Number (real/ponto flutuante)

// Padrão Americano: Separamos decimais com ponto (.), não vírgula.

// VARIÁVEIS: Espaço reservado na memória para armazenar informações.
// Possuem um Identificador (nome) e um Valor atribuído.

// Tipos de declaração:
// var: Forma antiga (escopo abrangente, pode gerar confusões).
// let: Forma moderna (recomendada, permite alterar o valor).
// const: Para valores que não devem ser alterados (constante).

let nome = "Caneta";
let quantidade = 10;
let preco = 6.4;
let imposto = 1.5;
let precoFinal = preco + imposto;

// Chamando o valor pelo identificador:
console.log("Produto: " + nome); // Concatenação: juntar texto com variável
console.log("Quantidade: " + quantidade);
console.log("Preço: " + preco);
console.log("Valor total: " + precoFinal);