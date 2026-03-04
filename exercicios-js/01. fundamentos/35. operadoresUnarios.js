// Operadores Unários: Operam sobre apenas um operando.

let num1 = 1;
let num2 = 2;

num1++; // Pós-fixada: Adiciona 1 ao valor.
--num1; // Pré-fixada: Subtrai 1 ao valor (tem prioridade maior na execução).

// Exemplo de código confuso (EVITAR):
// O ++num1 é executado primeiro, vira 2. Depois compara com num2 (2). 
// Só DEPOIS da comparação é que o num2-- acontece.
console.log(++num1 === num2--); // true
console.log(num1 === num2);     // false (num2 agora vale 1)