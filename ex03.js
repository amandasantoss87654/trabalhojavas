
document.getElementById('calcularReajusteBtn').addEventListener('click', function() {
    const saldo = parseFloat(document.getElementById('saldo').value);
    
    if (isNaN(saldo) || saldo < 0) {
        alert("Por favor, insira um saldo válido.");
        return;
    }
    
    const saldoReajustado = saldo * 1.01; // Aplicando o reajuste de 1%
    document.getElementById('saldoReajustado').innerText = `Saldo com reajuste: R$ ${saldoReajustado.toFixed(2)}`;
});
