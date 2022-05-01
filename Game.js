
//var bola
let EixoXbolinha = 300;
let EixoYbolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade bola
let velocidadeEixoXbolinha= 5;
let velocidadeEixoYbolinha= 5;


function setup() {
    createCanvas(600, 400);
}

function draw () {
    background(0);
    mostraBola ();
    movimentoBola ();
    colusaoBola ();
}

function mostraBola() {
    circle(EixoXbolinha, EixoYbolinha, diametro);
}

function movimentoBola() {
    EixoXbolinha += velocidadeEixoXbolinha; 
    EixoYbolinha += velocidadeEixoYbolinha; 
}

function colusaoBola() {
   
    if (EixoXbolinha + raio > width ||
        EixoXbolinha - raio < 0 ) {
        velocidadeEixoXbolinha *= -1;
    }

    if (EixoYbolinha + raio > height ||
        EixoYbolinha - raio < 0 ) {
        velocidadeEixoYbolinha *= -1;
    }
}