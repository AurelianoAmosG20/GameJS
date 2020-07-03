class Personagem extends Animacao{

    constructor(matriz, image, x, variacaoY, larg, alt, largSprite, altSprite){
        super(matriz, image, x,variacaoY, larg, alt, largSprite, altSprite);

        this.variacaoY = variacaoY;
        this.valorInicial = height - alt - this.variacaoY;
        this.y = this.valorInicial;
        this.veloPulo = 0;
        this.gravidade = 3;
        this.pulos = 0;
        this.invencivel = false;
    }

    pula(){
        if(this.pulos <=3){
            this.veloPulo = -45;
            this.pulos++;
        }
        
    }

    gravity(){
        this.y += this.veloPulo;
        this.veloPulo += this.gravidade + 1;
        
        if(this.y > this.valorInicial){
            this.y = this.valorInicial;
            this.pulos = 0;
        }
    }
    
    invenc(){
        this.invencivel = true;
        setTimeout(() =>{
            this.invencivel =  false;
        }, 1000);
    }

    colision(inimigo){  
        const precisao = 0.65;

        if(this.invencivel){
            return false;
        }
        
        
        if (this.x + (this.larg *precisao) >= inimigo.x &&   
            this.x <= inimigo.x + inimigo.larg &&    
            this.y + (this.alt *precisao) >= inimigo.y &&  
            this.y <= inimigo.y + inimigo.alt) {    
                return true;
        }
        return false;
    }
}