
document.getElementById('calcularMaiorBtn').addEventListener('click', function() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    let maiorValor;

    if (valor1 > valor2) {
        maiorValor = valor1;
    } else {
        maiorValor = valor2;
    }
    document.getElementById('maiorValor').innerText = `Maior Valor: ${maiorValor}`;
});
