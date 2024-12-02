function calcularCusto() {
    // Obter os valores dos inputs
    var valorAposta = parseFloat(document.getElementById("valorAposta").value);
    var quantidadeJogos = parseInt(document.getElementById("quantidadeJogos").value);

    // Verificar se os valores são válidos
    if (isNaN(valorAposta) || valorAposta <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um valor válido para a aposta!";
        return;
    }
    if (isNaN(quantidadeJogos) || quantidadeJogos <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira uma quantidade válida de jogos!";
        return;
    }

    // Calcular o custo total
    var custoTotal = valorAposta * quantidadeJogos;

    // Exibir o resultado
    document.getElementById("resultado").innerHTML = "Custo Total: R$ " + custoTotal.toFixed(2);
}

function calcularTeimosinha() {
    // Obter os valores dos inputs
    var concursos = parseInt(document.getElementById("concursosConsecutivos").value);
    var valorAposta = parseFloat(document.getElementById("valorAposta").value);

    // Verificar se os valores são válidos
    if (isNaN(concursos) || concursos <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido de concursos!";
        return;
    }
    if (isNaN(valorAposta) || valorAposta <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um valor válido para a aposta!";
        return;
    }

    // Calcular o custo teimosinha
    var custoTeimosinha = valorAposta * concursos;

    // Exibir o resultado
    document.getElementById("resultado").innerHTML = "Custo Teimosinha (para " + concursos + " concursos): R$ " + custoTeimosinha.toFixed(2);
}