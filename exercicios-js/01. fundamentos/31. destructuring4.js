// Destructuring em parâmetros de função (Array)

function rand([min = 0, max = 1000]) {
    // Se o mínimo for maior que o máximo, inverte os dois usando destructuring!
    if (min > max) [min, max] = [max, min]; 
    
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40])); // min 50, max 40 -> Inverte para 40, 50
console.log(rand([992]));    // Passando apenas o min
console.log(rand([ , 10]));  // Passando apenas o max (pula o primeiro elemento)
console.log(rand([]));       // Array vazio (usa padrões)
// console.log(rand());      // ERRO