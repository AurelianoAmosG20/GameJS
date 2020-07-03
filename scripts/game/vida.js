class Vida{
    constructor(maxima, valorInicial){
        this.maxima = maxima;
        this.valorInicial = valorInicial;
        this.vidas = this.valorInicial;
        this.larg = 25;
        this.alt = 25;
        this.xInicial = 20;
        this.y = 20;
    }

    draw(){
        for(let i = 0; i < this.vidas; i++){
            const margem = i * 10;
            const posicao = this.xInicial * (i + 1);
            image(imagemVida, posicao + margem, this.y,this.larg, this.alt);
        }
        
    }

    ganhaVida(){
        if(this.vidas < this.maxima){
            this.vidas++
        }
    }

    perdeVida(){
        this.vidas--
    }
}