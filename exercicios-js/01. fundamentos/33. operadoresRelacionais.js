// Operadores Relacionais: O resultado será sempre um Booleano (true/false).

console.log('01)', '1' == 1);   // Igualdade (compara apenas valor, faz coerção de tipo).
console.log('02)', '1' === 1);  // Estritamente igual (compara valor E tipo). RECOMENDADO.
console.log('03)', '3' != 3);   // Diferente.
console.log('04)', '3' !== 3);  // Estritamente diferente.

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

const d1 = new Date(0); // Data de referência (01/01/1970).
const d2 = new Date(0);

// Em objetos (Date, Array, Object), a comparação é por REFERÊNCIA de memória:
console.log('09)', d1 === d2); // false
console.log('10)', d1 == d2);  // false
console.log('11)', d1.getTime() === d2.getTime()); // true (compara o valor em milissegundos).

console.log('12)', undefined == null);  // true
console.log('13)', undefined === null); // false