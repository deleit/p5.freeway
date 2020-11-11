//código do ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;
let recorde = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
      xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
      xAtor += 3;
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      voltaParaPosicaoInicial();
      meusPontos = 0;
      somDaColisao.play();
    }
  }
}

function voltaParaPosicaoInicial() {
  yAtor = 385; 
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(106, 90, 205);
  text(meusPontos, width/2, 26)
}

function incluiRecorde() {
  textAlign(CENTER);
  textSize(25);
  fill(106, 90, 205);
  text("Hi-score: " + recorde, width*(3/4), 390)
}

function marcaPontos() {
  if (yAtor < 0) {
    meusPontos++;
    somDoPonto.play();
    voltaParaPosicaoInicial();
  }
}

function marcaRecorde() {
  if (recorde < meusPontos) {
    recorde = meusPontos;
  }
}

function podeSeMover() {
  return yAtor <= 366;
}