const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

// O 'let' tem escopo de bloco. O JS cria uma "cópia" de cada valor de 'i' 
// para cada iteração (conceito de Closure/Fechamento).
funcs[2](); // 2
funcs[8](); // 8