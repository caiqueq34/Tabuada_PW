
function calcular() {
        document.write("<br><br>");        
    }

    function mostra(frase) {
        document.write(frase);
        calcular();
    }

    var numeroTabuada = parseInt(prompt("Deseja ver o resultado da tabuada de qual número?"));

    // USAMOS CHECAR SE O VALOR INFORMADO É VÁLIDO
    while(isNaN(numeroTabuada)) {
        numeroTabuada = parseInt(prompt("Número inválido. Deseja ver o resultado da tabuada de qual número?"));
    }

    mostra("<big>Tabuada do número " + numeroTabuada + ": </big>");

    for(var contador = 1; contador <= 10; contador++) {
        mostra(numeroTabuada + " x " + contador + " = " + (numeroTabuada * contador));
    }

    mostra("Fim");
