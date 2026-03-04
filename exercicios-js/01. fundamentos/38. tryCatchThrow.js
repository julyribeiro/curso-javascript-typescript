// Tratamento de Erros: Try, Catch, Throw e Finally.

function tratarErroELancar(erro) {
    // throw: "Lança" o erro para quem chamou a função. 
    // Pode-se lançar mensagens, números, booleanos ou objetos.
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    };
}

function imprimirNomeGritado(obj) {
    try {
        // Bloco try: Código que pode gerar um erro (ex: acessar propriedade de undefined).
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        // Bloco catch: Captura o erro e permite tratá-lo.
        tratarErroELancar(e);
    } finally {
        // Bloco finally: Sempre será executado, ocorrendo erro ou não.
        console.log('Finalização do processo.');
    }
}

const obj = { nome: 'July' }; // Erro proposital: a função busca 'name' e o objeto tem 'nome'.
imprimirNomeGritado(obj);