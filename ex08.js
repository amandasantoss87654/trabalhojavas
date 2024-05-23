
document.getElementById('consultarProdutoBtn').addEventListener('click', function() {
    const codigoProduto = document.getElementById('codigoProduto').value;

    let nomeProduto;

    if (codigoProduto === '0001') {
        nomeProduto = 'Parafuso';
    } else if (codigoProduto === '0002') {
        nomeProduto = 'Porca';
    } else if (codigoProduto === '0003') {
        nomeProduto = 'Prego';
    } else {
        nomeProduto = 'Diversos';
    }

    document.getElementById('nomeProduto').innerText = `Produto: ${nomeProduto}`;
});
