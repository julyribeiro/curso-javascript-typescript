// Notação Ponto: Usada para acessar membros (atributos e funções) de objetos.

console.log(Math.ceil(6.1)); // Acessa a função 'ceil' do objeto 'Math'.

const obj1 = {};
obj1.nome = 'Bola'; // Cria dinamicamente o atributo 'nome' no objeto.
/*  obj1['nome'] = 'Bola 2';  
    Notação de colchetes: sobrescreve o valor, útil para nomes com espaços, mas não é tão indicado.*/

console.log(obj1.nome);

function Obj(nome) {
    // 'this' torna o atributo ou função público (exposto) para quem instanciar o objeto.
    this.nome = nome; 
    this.exec = function() {
        console.log('Executando...');
    };
}

const obj2 = new Obj('Cadeira'); // Instanciando um novo objeto.
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec(); // Acessando a função através do ponto.