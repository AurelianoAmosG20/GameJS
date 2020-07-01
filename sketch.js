let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoTroll;
let imagemInimigoVoador;
let gameOver;

let cenario;

let personagem;
let inimigo;
let inimigoTroll;
let inimigoVoador;
let pontuacao;

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

const matrizInimigoTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const inimigos = [];
function preload(){
  imagemCenario = loadImage("/assets/imagens/cenario/floresta.png");
  imagemPersonagem = loadImage("/assets/imagens/personagem/correndo.png");
  imagemInimigo = loadImage("/assets/imagens/inimigos/gotinha.png");
  imagemInimigoTroll = loadImage("assets/imagens/inimigos/troll.png");
  gameOver = loadImage("assets/imagens/assets/game-over.png");

  imagemInimigoVoador = loadImage("assets/imagens/inimigos/gotinha-voadora.png");
  trilhaJogo = loadSound("/assets/sons/trilha_jogo.mp3");
  soundJump = loadSound("/assets/sons/somPulo.mp3")
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  cenario = new Cenario(imagemCenario, 3);
  pontuacao =  new Pontuacao();
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0,30,110, 135, 220, 270);
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, window.innerWidth - 52,0, 52, 52, 104 ,104, 10,100);
  const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, 0, -10, 200, 200, 400, 400, 5, 50);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, 0, 30, 100, 75, 200, 150, 10, 900);
  inimigos.push(inimigoVoador);
  inimigos.push(inimigo);
  inimigos.push(inimigoTroll);

  //inimigo = new Inimigo(matrizInimigo, imagemInimigo, window.innerWidth - 52, 52, 52, 104, 104);
  frameRate(30);
  //Loop para rodar várias vezes, play para tocar apenas uma vez
  //trilhaJogo.loop();
}


function keyPressed(){
  if(key === "ArrowUp"){
    personagem.pula();
    soundJump.play();
  }
}
function draw() {
  //createCanvas(window.innerWidth, window.innerHeight);
  cenario.show();
  cenario.move();
  personagem.show();
  personagem.gravity();
  pontuacao.show();
  pontuacao.addPonto();

  
  inimigos.forEach(inimigo => {
      inimigo.show();
      inimigo.move();

      if(personagem.colision(inimigo)){
        image(gameOver, (window.innerWidth / 2 - 200), (window.innerHeight / 2));
        noLoop();
      }    

  })
}



