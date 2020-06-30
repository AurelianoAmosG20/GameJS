class Inimigo extends Animacao{
    constructor(matriz, image, x, y, larg, alt, largSprite, altSprite){
        super(matriz, image, x, y, larg, alt, largSprite, altSprite);

        this.velocidade = 10;
    }

    move(){
        this.x = this.x - this.velocidade;

        if(this.x < -this.larg){
            this.x = window.innerWidth;
        }
    }
}