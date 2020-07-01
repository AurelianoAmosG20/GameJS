class Animacao{
    constructor(matriz, image, x, variacaoY, larg, alt, largSprite, altSprite){

        this.variacaoY = variacaoY;
        //x é a posição na tela
        this.matriz = matriz;
        this.image = image;
        this.x = x;
        this.y = window.innerHeight - alt - this.variacaoY;
        this.larg = larg;
        this.alt = alt - this.variacaoY;
        this.largSprite = largSprite;
        this.altSprite = altSprite;

        this.pontoAtual = 0;
    }

    show(){
        image(this.image, this.x, this.y, this.larg, this.alt, this.matriz[this.pontoAtual][0], this.matriz[this.pontoAtual][1],
            this.largSprite, this.altSprite);
        this.anima();
    }
    anima(){
        this.pontoAtual++;

        if(this.pontoAtual >= this.matriz.length - 1){
            this.pontoAtual = 0;
        }
    }
}