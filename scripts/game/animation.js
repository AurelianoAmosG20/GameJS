class Animacao{
    constructor(matriz, image, x, y, larg, alt, largSprite, altSprite){
        //x é a posição na tela
        this.matriz = matriz;
        this.image = image;
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.alt = alt;
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