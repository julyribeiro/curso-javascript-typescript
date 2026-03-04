// uma coisa e outra devem acontecer para que haja execução

// E, OU, NOT

// e (&&) = dois operandos verdadeiros
// ou (||) =  uma operando ou outro verdadeiro
// xor = os dois nao podem ser verdadeiros ou falsos, um tem que ser verdadeiro e outro falso

// TABELA DA VERDADE

// E - AND (operador binario - opera com dois)
// v e v -> v
// v e f -> f
// f e ? -> f 


// OU - OR (operador binario - opera com dois)
// v ou ? -> v // quando uma opcao da verdadeira no caso de ou nem precisa olhar o outro operando
// f ou v -> v
// f ou f -> f

// OU Exclusivo - XOR (operador binario - opera com dois)
// obrigatoriamente os operandos tem que der diferentes
// v xor v -> falso
// v xor f -> verdadeiro
// f xor v -> verdadeiro
// f xor f -> falso


// ! = negação lógica (operador unario - opera só com um)
// !v ->  falso
// !f -> verdadeiro

function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2; // ou -  se um é verdadeiro nem avalia o outro
    const comprarTv50 = trabalho1 && trabalho2; // e - tem que olhar se os dois é verdadeiro
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2; // diferente - um é diferente do outro
    const manterSaudavel = !comprarSorvete; // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // criacao de um objeto
    // nome da constante é a chave e o valor da constante será o valor dela, ou seja, o resultado da operação

}

console.log(compras(true, true,)); 
console.log(compras(true, false,));
console.log(compras(false, true)); 
console.log(compras(false, false));