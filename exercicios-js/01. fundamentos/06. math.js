// Math: É um objeto embutido que possui funções matemáticas.

const raio = 5.6;
// Math.PI: Constante que representa o valor de PI.
// Math.pow: Função para exponenciação (potência).
const area = Math.PI * Math.pow(raio, 2);

console.log(area.toFixed(2));
console.log(typeof Math); // Retorna 'object'