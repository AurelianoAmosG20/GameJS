class Inimigo extends Animacao{
    constructor(matriz, image, x, variacaoY, larg, alt, largSprite, altSprite, velocidade, delay){
        super(matriz, image, x, variacaoY, larg, alt, largSprite, altSprite );

        this.valorInicial = height - alt - this.variacaoY;
        this.y = this.valorInicial - 52;
        this.velocidade = velocidade;
        this.delay = delay;
        this.x = window.innerWidth - this.delay;
    }

    move(){
        this.x = this.x - this.velocidade;

        if(this.x < -this.larg - this.delay){
            this.x = window.innerWidth;
        }
    }
}