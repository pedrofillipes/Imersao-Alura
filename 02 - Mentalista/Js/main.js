var jogar = prompt('Quer jogar?(s/n)');

if (jogar == 's'){
    var numeroSecreto = parseInt(Math.random() * (101 - 1) + 1);
    var i = 0; // contador de tentativas
    var tentativasRestantes = 5;

    while (chute != numeroSecreto && i < 5) {
        var chute = prompt(`Digite um número entre 0 e 100. Tentativas restantes: ${tentativasRestantes}`);

        if (chute == numeroSecreto) {
            alert ('Parabéns, você acertou!');
        } else if (chute > numeroSecreto && i < 4) {
            alert (`Errou... o número secreto é menor. Tentativas restantes: ${tentativasRestantes-1}`);
        } else if (chute < numeroSecreto && i < 4) {
            alert (`Errou... o número secreto é maior. Tentativas restantes: ${tentativasRestantes-1}`);
        } else if (chute < numeroSecreto) {
            alert (`Você perdeu! O número secreto era ${numeroSecreto}.`);
        };

        i += 1;
        tentativasRestantes -= 1;
    };
};
