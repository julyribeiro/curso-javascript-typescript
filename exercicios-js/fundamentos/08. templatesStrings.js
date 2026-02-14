// Template Strings: Facilitam a concatenação e a leitura do código.
// São delimitadas por crases ( ` ).

const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!'; // Strings comuns não permitem quebra de linha

const template = `
    Olá
    ${nome}!`; // Permite quebra de linha e interpolação de variáveis com ${}

console.log(concatenacao, template);

// É possível realizar expressões matemáticas dentro do template:
console.log(`1 + 1 = ${1 + 1}`);

// Podemos chamar funções dentro da interpolação:
const up = texto => texto.toUpperCase(); // Função que transforma em maiúsculo
console.log(`Ei... ${up('cuidado')}!`);

const lower = texto => texto.toLowerCase(); // Função que transforma em minúsculo
console.log(`Ei... ${lower('CUIDADO')}!`);