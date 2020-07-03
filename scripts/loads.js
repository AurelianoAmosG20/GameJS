
function preload(){
    imagemCenario = loadImage("/assets/imagens/cenario/floresta.png");
    imagemPersonagem = loadImage("/assets/imagens/personagem/correndo.png");
    imagemInimigo = loadImage("/assets/imagens/inimigos/gotinha.png");
    imagemInimigoTroll = loadImage("assets/imagens/inimigos/troll.png");
    gameOver = loadImage("assets/imagens/assets/game-over.png");
    imagemTelaInicial = loadImage("/assets/imagens/assets/telainicial.png");
    imagemVida = loadImage("assets/imagens/assets/coracao.png");
    fontTelaIncial = loadFont("assets/fonteTelaInicial.otf");
    imagemInimigoVoador = loadImage("assets/imagens/inimigos/gotinha-voadora.png");
    trilhaJogo = loadSound("/assets/sons/trilha_jogo.mp3");
    soundJump = loadSound("/assets/sons/somPulo.mp3")
  }