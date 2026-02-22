// Funções: Um bloco de código nomeado que executa um processo baseado em sentenças.
// Recebe parâmetros de entrada e pode ou não retornar um resultado.
// Analogia: Uma receita de bolo (instruções que recebem ingredientes e geram um produto).

// 1. Função SEM RETORNO
function imprimirSoma(a, b) {
    console.log(a + b);
}

// Chamadas da função e comportamentos específicos do JS:
imprimirSoma(2, 3);          // Caso padrão: 5
imprimirSoma(2);             // 'b' será undefined, resultando em NaN (2 + undefined)
imprimirSoma(2, 5, 4, 5, 6); // Considera os dois primeiros e ignora o restante
imprimirSoma();              // NaN (undefined + undefined)

// 2. Função COM RETORNO
// O valor padrão para o parâmetro (b = 1) evita resultados NaN se o valor não for passado.
function soma(a, b = 1) {
    return a + b;
}

// Como a função retorna o valor, precisamos do console.log para exibi-lo:
console.log(soma(2, 3)); 
console.log(soma(2));    // Resultado: 3 (2 + valor padrão 1)
console.log(soma());     // NaN (pois 'a' continua sendo undefined)