class TelaInicial{
    constructor(){

    }

    draw(){
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }
    _imagemDeFundo(){
        image(imagemTelaInicial, 0, 0, window.innerWidth, window.innerHeight);
    }

    _texto(){
        textFont(fontTelaIncial);
        textAlign(CENTER);
        textSize(100);
        text("As Aventuras da", window.innerWidth / 2, 300);
        textSize(200);
        text("BRUXINHA DEV", window.innerWidth / 2, 500);
    }

    _botao(){
        button.draw();
    }
}