
//var bola
let EixoXbolinha = 300;
let EixoYbolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//var velocidade bola
let velocidadeEixoXbolinha= 5;
let velocidadeEixoYbolinha= 5;

//var raquete
let xRaquete = 5;
let yRaquete = 150;
let ComprimentoRaquete = 10;
let AlturaRaquete = 90;

//var oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente = 150;

let colidiu = false;

//placar jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("./assets/trilha.mp3");
    ponto = loadSound("./assets/ponto.mp3");
    raquetada = loadSound("./assets/raquetada.mp3");
}

function setup() {
    createCanvas(600, 400);
    trilha.loop();
}

function draw () {
    background(0);
    mostraBola ();
    movimentoBola ();
    colisaoBola ();
    mostraRaquete (xRaquete, yRaquete);
    movimentoRaquete ();
    //ColisaoRaqueteBola ();
    VerificaColisaoRaqueteLib (xRaquete, yRaquete);
    mostraRaquete (xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    VerificaColisaoRaqueteLib(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();  
    marcardorPonto();
}

function mostraBola() {
    circle(EixoXbolinha, EixoYbolinha, diametro);
}

function movimentoBola() {
    EixoXbolinha += velocidadeEixoXbolinha; 
    EixoYbolinha += velocidadeEixoYbolinha; 
}

function colisaoBola() {
    if (EixoXbolinha + raio > width ||
        EixoXbolinha - raio < 0 ) {
        velocidadeEixoXbolinha *= -1;
    }

    if (EixoYbolinha + raio > height ||
        EixoYbolinha - raio < 0 ) {
        velocidadeEixoYbolinha *= -1;
    }
}

function mostraRaquete(x,y) {
    rect(x, y, ComprimentoRaquete, AlturaRaquete);
}
function movimentoRaquete () {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }

}
function ColisaoRaqueteBola() {
    if (EixoXbolinha - raio < xRaquete + ComprimentoRaquete && EixoYbolinha - raio < yRaquete + AlturaRaquete && EixoYbolinha + raio > yRaquete) {
        velocidadeEixoXbolinha *= -1;
        raquetada.play();
    }
}
function VerificaColisaoRaqueteLib(x, y) {
    colidiu = collideRectCircle(x, y, ComprimentoRaquete, AlturaRaquete, EixoXbolinha, EixoYbolinha, raio);
    if (colidiu){
        velocidadeEixoXbolinha *= -1;
        raquetada.play();
    }
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = EixoYbolinha - yRaqueteOponente - ComprimentoRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER); 
  textSize(16);
  fill(color(255, 140, 0));  
  rect(150, 10, 40, 20);
  fill(255);
  text (meusPontos, 170, 26)
  fill(color(255, 140, 0)); 
  rect(450, 10, 40, 20);
  fill(255);
  text (pontosOponente, 470, 26)
  
}  

function marcardorPonto() {
  if (EixoXbolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (EixoXbolinha < 10) {
    pontosOponente += 1;
    ponto.play();
  }
}