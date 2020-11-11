function setup() {
  createCanvas(500, 400);
  //somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarroPista1();
  movimentaCarroPista2()
  movimentaAtor();
  voltaPosicaoInicialDoCarroPista1();
  voltaPosicaoInicialDoCarroPista2();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  incluiRecorde();
  marcaRecorde();
}