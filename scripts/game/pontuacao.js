class Pontuacao{
    constructor(){
        this.pontos = 0;
    }


    show(){
        
        fill("#FFF");
        textSize(50);
        
        text("Time (s): " + parseInt(this.pontos), window.innerWidth -400, 100);
        
    }

    addPonto(){
        this.pontos += 0.031;
    }
}