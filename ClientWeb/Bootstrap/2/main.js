// main.js
function compararOpe() {
    // Obter valores de entrada
    const valorA = parseFloat(document.getElementById('inputValorA').value);
    const valorB = parseFloat(document.getElementById('inputValorB').value);
    const tipoOperation = document.getElementById('tipoOperation').value.trim();

    // Obter o elemento onde o resultado será exibido
    const textoResultado = document.getElementById('textoResultado');

    let resultado;

    // Verificar se os valores são números válidos
    if (isNaN(valorA) || isNaN(valorB)) {
        textoResultado.textContent = 'Por favor, insira valores válidos em A e B.';
        return;
    }

    // Realizar o cálculo baseado na operação selecionada
    switch (tipoOperation) {
        case '+':
            resultado = valorA + valorB;
            break;
        case '-':
            resultado = valorA - valorB;
            break;
        case '*':
            resultado = valorA * valorB;
            break;
        case '/':
            if (valorB === 0) {
                textoResultado.textContent = 'Não é possível dividir por zero.';
                return;
            }
            resultado = valorA / valorB;
            break;
        default:
            textoResultado.textContent = 'Operação inválida. Use "+", "-", "*", ou "/".';
            return;
    }

    // Exibir o resultado
    textoResultado.textContent = `Resultado: ${resultado}`;
}


