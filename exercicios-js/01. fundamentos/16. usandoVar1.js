// Escopo: O lugar onde a variável é visível/acessível.
// var possui apenas dois escopos: Global e de Função.

{
    {
        {
            {
                var sera = 'Será???';
                console.log(sera); // Visível dentro do bloco
            }
        }
    }
}

// Em JS, o 'var' NÃO tem escopo de bloco. Ele "foge" para o escopo global.
console.log(sera); 

function teste() {
    var local = 123;
    console.log(local); // Escopo de função: a variável só é visível aqui dentro.
}

teste();
// console.log(local); // Erro! 'var' respeita o escopo de função e não sai dela.

/*  CUIDADOS: 
    * Variáveis globais vão para o objeto 'window' no browser. 
    * Deve-se evitar criar variáveis globais para não gerar conflitos de nomes no código. */