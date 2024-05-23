
document.getElementById('calcularMenorBtn').addEventListener('click', function() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const valor3 = parseFloat(document.getElementById('valor3').value);
    const valor4 = parseFloat(document.getElementById('valor4').value);

    let menorValor = valor1;

    if (valor2 < menorValor) {
        menorValor = valor2;
    }
    if (valor3 < menorValor) { 
        menorValor = valor3;
    }
    if (valor4 < menorValor) {
        menorValor = valor4;
    }

    document.getElementById('menorValor').innerText = `Menor Valor: ${menorValor}`;
});
