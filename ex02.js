
document.getElementById('calcularPrecoBtn').addEventListener('click', function() {
    let valorQuilo = parseFloat(document.getElementById('valorQuilo').value);
    let quantidadeQuilos = parseFloat(document.getElementById('quantidadeQuilos').value);
    
    if (isNaN(valorQuilo) || isNaN(quantidadeQuilos) || valorQuilo <= 0 || quantidadeQuilos <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }
    
    let precoFinal = valorQuilo * quantidadeQuilos;
    document.getElementById('precoFinal').innerText = "Preço Final: R$ " + precoFinal.toFixed(2);
});
