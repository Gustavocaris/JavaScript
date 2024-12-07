function calculadora() {
    // Solicitar os numeros ao usuario
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número:  "));

    // perguntar qual operação ele deseja fazer
    let operacao = prompt("Escolha qual operação deseja fazer: - + / * ?")

    //Realizar as operacoes e exibir na telovix
    let resultado;
    switch (operacao) {
        case "-":
            resultado = num1 - num2;
            break;
        case "+":
            resultado = num1 + num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            alert("Operação inválida.");
            return;
    }
    // Exibe o resultado
    alert("Resultado: " + resultado);
}

calculadora();