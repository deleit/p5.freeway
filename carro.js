//código dos carros
let xCarros = [600, 600, 600, -66, -66, -66];
let yCarros = [40, 96, 150, 210, 262, 316];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.5];
let larguraCarro = 66;
let alturaCarro = 37;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}

function movimentaCarroPista1() {
  for (let i = 0; i <= 2; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function movimentaCarroPista2() {
  for (let i = 3; i < imagemCarros.length; i++) {
    xCarros[i] += velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarroPista1() {
  for (let i = 0; i <= 2; i++) {
    if (passouTodaATelaPista1(i)) {
      xCarros[i] = 600;
    }
  }
}

function voltaPosicaoInicialDoCarroPista2() {
  for (let i = 3; i < imagemCarros.length; i++) {
    if (passouTodaATelaPista2(i)) {
      xCarros[i] = -66;
    }
  }
}

function passouTodaATelaPista1(i) {
  return xCarros[i] < -66;
}

function passouTodaATelaPista2(i) {
  return xCarros[i] > 666;
}