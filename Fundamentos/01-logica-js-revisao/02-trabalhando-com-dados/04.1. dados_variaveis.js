// Estrutura da variável:
// let (criação) | nome (identificador) | = (atribuição) | "Teste" (valor)

// Exemplo de cálculo sem variável (Valores "soltos"):
console.log(19.9 * 0.6);

// Exemplo de cálculo com variáveis (Código muito mais legível e reutilizável):
let precoUnitario = 19.90;
let desconto = 0.4; // 40% de desconto
let precoComDesconto = precoUnitario * (1 - desconto); // Parênteses definem prioridade matemática

console.log("Preço final: " + precoComDesconto);

// Boas Práticas: Usar nomes intuitivos (ex: 'precoUnitario' em vez de 'p').

// CONCATENAÇÃO AVANÇADA
let nomeProduto = "Caderno";
let categoria = "Papelaria";

console.log("Produto: " + nomeProduto 
    + ", Categoria: " + categoria 
    + ", Preço: " + precoUnitario); 
// Podemos quebrar linhas na concatenação para facilitar a visualização do código.