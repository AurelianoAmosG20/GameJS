class Jogo{
    constructor(){
        this.inimigoAtual = 0;
    }

    setup(){
        cenario = new Cenario(imagemCenario, 3);
        pontuacao =  new Pontuacao();
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0,30,110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, window.innerWidth - 52,0, 52, 52, 104 ,104, 10,100);
        const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, 0, -10, 200, 200, 400, 400, 5, 50);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, 0, 30, 100, 75, 200, 150, 10, 100);
        inimigos.push(inimigoVoador);
        inimigos.push(inimigo);
        inimigos.push(inimigoTroll);
        
    }
    keyPressed(key){
        if(key === "ArrowUp"){
            personagem.pula();
            //soundJump.play();
        }
    }

    draw(){
        cenario.show();
        cenario.move();
        personagem.show();
        personagem.gravity();
        pontuacao.show();
        pontuacao.addPonto();

        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.larg;
        
        

        inimigo.show();
        inimigo.move();

        if(inimigoVisivel){
            this.inimigoAtual++;
            if(inimigoAtual > 2){
            inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(10,20));
        }

        if(personagem.colision(inimigo)){
            image(gameOver, (window.innerWidth / 2 - 200), (window.innerHeight / 2));
            noLoop();
        }    

    }
}