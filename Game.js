let EixoXbolinha = 300;
let EixoYbolinha = 200;
let diametro = 15;

let velocidadeEixoXbolinha= 6;
let velocidadeEixoYbolinha= 6;


function setup() {
    createCanvas(600, 400);
}

function draw () {
    background(0);
    circle(EixoXbolinha, EixoYbolinha, diametro);
    EixoXbolinha += velocidadeEixoXbolinha; 
    EixoYbolinha += velocidadeEixoYbolinha; 

    if (EixoXbolinha > width ||
        EixoXbolinha < 0 ) {
        velocidadeEixoXbolinha *= -1;
    }

    if (EixoYbolinha > height ||
        EixoYbolinha < 0 ) {
        velocidadeEixoYbolinha *= -1;
    }
}