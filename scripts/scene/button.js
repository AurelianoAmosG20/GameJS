class Button{
    constructor(texto, x, y){
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.button = createButton(this.texto);
        this.button.addClass('button-inicial');
    }

    draw(){
        this.button.position(this.x, this.y);
        this.button.center();
        this.button.mousePressed(() =>{
            cenaAtual = jogo;
            this._changeScene();
        });
    }

    _changeScene(){
        this.button.remove();
    }

}