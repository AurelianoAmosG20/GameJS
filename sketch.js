function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  button = new Button("Iniciar", window.innerWidth /2, window.innerHeight /2)
 
  frameRate(30);
  //trilhaJogo.loop();
  cenaAtual = telaInicial;
  scenes = {
    jogo,
    telainicial : telaInicial
  };
}

function keyPressed(){
  jogo.keyPressed(key);
  
}
function draw() {
  //createCanvas(window.innerWidth, window.innerHeight);
  cenaAtual.draw();
  //telaInicial.draw();
  
}



