function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
 
  frameRate(30);
  //trilhaJogo.loop();
  cenaAtual = 'jogo';
  scenes = {
    jogo,
    telainicial
  };
}

function keyPressed(){
  jogo.keyPressed(key);
  
}
function draw() {
  //createCanvas(window.innerWidth, window.innerHeight);
  scenes[cenaAtual].draw();

  
}



