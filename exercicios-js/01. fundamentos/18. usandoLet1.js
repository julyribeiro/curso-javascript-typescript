// let possui três escopos: Global, Função e Bloco.

var numero = 1;
{
    let numero = 2; // let respeita o bloco e cria um novo escopo.
    console.log('dentro =', numero);
}

console.log('fora =', numero); // Resultado: dentro = 2, fora = 1.

/*  Regra de busca: 
    O JS procura a variável do escopo mais interno (menor) para o mais externo (maior). */