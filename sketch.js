let imagemCenario;
let imagemPersonagem;
let cenario;
let trilhaJogo;
let personagem;


function preload(){
  imagemCenario = loadImage("/assets/imagens/cenario/floresta.png");
  imagemPersonagem = loadImage("/assets/imagens/personagem/correndo.png");
  trilhaJogo = loadSound("/assets/sons/trilha_jogo.mp3");
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(30);
  //Loop para rodar várias vezes, play para tocar apenas uma vez
  //trilhaJogo.loop();
}

function draw() {
  //createCanvas(window.innerWidth, window.innerHeight);
  cenario.show();
  cenario.move();
  personagem.show()

}



