var numero = 1;

{
    // Como 'var' não respeita blocos, ele sobrescreve a variável de fora
    // se estiverem no mesmo escopo (global neste caso).
    var numero = 2;
    console.log('dentro =', numero);
}

console.log('fora =', numero); // O resultado será 2 para ambos.