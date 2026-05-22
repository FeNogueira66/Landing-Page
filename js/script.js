const botoes = document.querySelectorAll(".btn-item");
const contadorCarrino = document.querySelector(".quant-carrinho");

var quantCarrinho = 0;
var totalCarrinho = 0;

botoes.forEach(botao => {
  botao.addEventListener("click", () => {

    const nome = botao.dataset.nome;
    const preco = Number(botao.dataset.preco);

    quantCarrinho++;
    totalCarrinho += preco;

    contadorCarrino.textContent = quantCarrinho;

    alert("Produto adicionado!");
  })
})

function finalizarCompra() {
  if (quantCarrinho == 0){
    alert("Adicione produtos ao carrinho antes de comprar!")
  } else {
    alert(`Obrigado por comprar \n Total: R$ ${totalCarrinho.toFixed(2)} `)
    quantCarrinho = 0
    totalCarrinho = 0;
    contadorCarrino.textContent = quantCarrinho;
  }
}
