
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

function setup() {
    createCanvas(600, 400);
}

function draw () {
    background(0);
    mostraBola ();
    movimentoBola ();
    colisaoBola ();
    mostraRaquete ();
    movimentoRaquete ();
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

function mostraRaquete () {
    rect (xRaquete, yRaquete, ComprimentoRaquete, AlturaRaquete);
}

function movimentoRaquete () {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }

}
