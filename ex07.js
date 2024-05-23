
document.getElementById('verificarImparBtn').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    if (numero % 2 !== 0) {
        document.getElementById('resultado').innerText = `${numero} é um número ímpar.`;
    } else {
        document.getElementById('resultado').innerText = `${numero} não é um número ímpar.`;
    }
});
