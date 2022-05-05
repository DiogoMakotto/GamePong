
//var bola
let EixoXbolinha = 300;
let EixoYbolinha = 200;
let diametro = 15;
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

function setup() {
    createCanvas(600, 400);
}

function draw () {
    background(0);
    mostraBola ();
    movimentoBola ();
    colisaoBola ();
    mostraRaquete (xRaquete, yRaquete);
    movimentoRaquete ();
    //ColisaoRaqueteBola ();
    ColisaoMinhaRaqueteLib ();
    mostraRaquete (xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
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
    }
}
function ColisaoMinhaRaqueteLib() {
    colidiu = collideRectCircle(xRaquete, yRaquete, ComprimentoRaquete, AlturaRaquete, EixoXbolinha, EixoYbolinha, raio);
    if (colidiu){
        velocidadeEixoXbolinha *= -1;
    }
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = EixoYbolinha - yRaqueteOponente - ComprimentoRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}