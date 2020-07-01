class Personagem extends Animacao{

    constructor(matriz, image, x, variacaoY, larg, alt, largSprite, altSprite){
        super(matriz, image, x,variacaoY, larg, alt, largSprite, altSprite);

        this.variacaoY = variacaoY;
        this.valorInicial = height - alt - this.variacaoY;
        this.y = this.valorInicial;
        this.veloPulo = 0;
        this.gravidade = 3;
    }

    pula(){
        this.veloPulo = -40;
    }

    gravity(){
        this.y += this.veloPulo;
        this.veloPulo += this.gravidade;
        
        if(this.y > this.valorInicial){
            this.y = this.valorInicial;
        }
    }
   
    colision(inimigo){  
        const precisao = 0.65;
        
        
        if (this.x + (this.larg *precisao) >= inimigo.x &&   
            this.x <= inimigo.x + inimigo.larg &&    
            this.y + (this.alt *precisao) >= inimigo.y &&  
            this.y <= inimigo.y + inimigo.alt) {    
                return true;
        }
        return false;
    }
}