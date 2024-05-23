function calcularTroco() {
    let valorPago = parseFloat(document.getElementById('valorPago').value);
    let precoProduto = parseFloat(document.getElementById('precoProduto').value);
    if (isNaN(valorPago) || isNaN(precoProduto)) {
        alert("Por favor, insira valores válidos.");
        return;
    }
    let troco = valorPago - precoProduto;
    document.getElementById('troco').innerText = (troco < 0) ? "Valor pago é menor que o preço do produto. Sem troco a ser dado." : "Troco a ser dado: " + troco.toFixed(2);
}
