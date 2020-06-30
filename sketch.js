let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let cenario;

let personagem;
let inimigo;

let trilhaJogo;
let soundJump;
const matrizPersonagem = [[0, 0],
[220, 0],
[440, 0],
[660, 0],
[0, 270],
[220, 270],
[440, 270],
[660, 270],
[0, 540],
[220, 540],
[440, 540],
[660, 540],
[0, 810],
[220, 810],
[440, 810],
[660, 810]];
const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]
function preload(){
  imagemCenario = loadImage("/assets/imagens/cenario/floresta.png");
  imagemPersonagem = loadImage("/assets/imagens/personagem/correndo.png");
  imagemInimigo = loadImage("/assets/imagens/inimigos/gotinha.png");
  trilhaJogo = loadSound("/assets/sons/trilha_jogo.mp3");
  soundJump = loadSound("/assets/sons/somPulo.mp3")
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, window.innerHeight - 135, 110, 135, 220, 270);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, window.innerWidth  -52,window.innerHeight - 52, 52, 52, 104 ,104);
  //inimigo = new Inimigo(matrizInimigo, imagemInimigo, window.innerWidth - 52, 52, 52, 104, 104);
  frameRate(30);
  //Loop para rodar várias vezes, play para tocar apenas uma vez
  trilhaJogo.loop();
}


function keyPressed(){
  if(key === "ArrowUp"){
    personagem.pula();
    soundJump.play()
  }
  
 //(key === "ArrowDown" ? personagem.gravity() : "");
}
function draw() {
  //createCanvas(window.innerWidth, window.innerHeight);
  cenario.show();
  cenario.move();
  personagem.show();
  personagem.gravity();
  inimigo.show();
  inimigo.move();

  if(personagem.colision(inimigo)){
    console.log("colidiu");
    noLoop();
  }
}



