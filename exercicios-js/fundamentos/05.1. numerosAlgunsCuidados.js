// Alguns cuidados importantes com Numbers:

console.log(7 / 0);          // Retorna 'Infinity' (Não gera erro)
console.log("10" / 2);       // Funciona! O JS converte a string internamente (coerção)
console.log("10,2" / 2);     // NaN (Not a Number) - Não reconhece a vírgula
console.log('3' + 2);        // CUIDADO: O '+' concatena, então o resultado é 32 (String ganha)
console.log("Show!" * 2);    // NaN
console.log(0.1 + 0.7);      // Gera imprecisão devido ao padrão IEEE 754 (Resulta em 0.799...)

// console.log(10.toString()); // Não funciona direto no literal
console.log((10.345).toFixed(2)); // Funciona entre parênteses ou em variáveis