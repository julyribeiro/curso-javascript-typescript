const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

// Por causa do problema do escopo do 'var', todas as funções no array 
// apontam para o mesmo 'i' final (que vale 10).
funcs[2](); // 10
funcs[8](); // 10