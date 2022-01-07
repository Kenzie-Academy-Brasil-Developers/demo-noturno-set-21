function calculaValor(produto) {
  produto["valorCalculado"] = produto.precoOriginal * (1 - produto.desconto);
  return produto;
}

function pegaValor(produto) {
  return produto.precoOriginal;
}

module.exports = { calculaValor, pegaValor };
