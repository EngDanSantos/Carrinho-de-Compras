let totalGeral;
limpar();

function adicionar(){
    //recupera valores, nome, quantidade, valor, preço, e subtotal
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorunitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorunitario;
    //adcionar o produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    // atualizar o valor total
     totalGeral = totalGeral +  preco;
    let carrinhoTotal = document.getElementById('valor-total');
    carrinhoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
    if (quantidade <= 0) {
      // Exibir mensagem de erro
      alert("Quantidade inválida! O produto não pode ser adicionado ao carrinho com quantidade zero.");
      return limpar();
    }
}
function limpar(){
  document.getElementById('valor-total').textContent = 'R$ 0';
  document.getElementById('lista-produtos').textContent = '';
  totalGeral = 0;
}