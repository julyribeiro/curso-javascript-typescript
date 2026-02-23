// Utilização do var em um loop

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// Como 'var' não tem escopo de bloco, 'i' está disponível fora do laço.
console.log('i fora do laço =', i); // Resultado: 10