
document.getElementById('calcularMediasBtn').addEventListener('click', function() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);
    
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }
    const mediaAritmetica = (numero1 + numero2 + numero3) / 3;
    document.getElementById('mediaAritmetica').innerText = `Média Aritmética: ${mediaAritmetica.toFixed(2)}`;

    const mediaPonderada = (numero1 * 3 + numero2 * 2 + numero3 * 5) / (3 + 2 + 5);
    document.getElementById('mediaPonderada').innerText = `Média Ponderada: ${mediaPonderada.toFixed(2)}`;
    
    const somaMedias = mediaAritmetica + mediaPonderada;
    document.getElementById('somaMedias').innerText = `Soma das Médias: ${somaMedias.toFixed(2)}`;
    
    const mediaDasMedias = somaMedias / 2;
    document.getElementById('mediaDasMedias').innerText = `Média das Médias: ${mediaDasMedias.toFixed(2)}`;
});
