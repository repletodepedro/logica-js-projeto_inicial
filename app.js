alert ('Boas vindas ao jogo do número secreto!');

let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute nao for igual ao ns
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');

    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    }

    else {
        if (chute < numeroSecreto) {
            alert(`o numero secreto é maior que ${chute}`);
        }
        else {
            alert(`o numero secreto é menor que ${chute}`);
        }

        tentativas++;
    }
}

if (tentativas > 1) {
     // console.log(`você descobriu o número secreto ${numeroSecreto} `);
        alert(`voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
}

else {
        alert(`voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
}