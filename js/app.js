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
}

function limpar(){

}