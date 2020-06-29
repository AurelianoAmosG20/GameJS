class Cenario {
    constructor(imagem, veloc){
      this.imagem = imagem;
      this.veloc = veloc;
      this.x1 = 0;
      this.x2 = window.innerWidth;
    }
    show(){
      image(this.imagem, this.x1, 0, window.innerWidth, window.innerHeight);
      image(this.imagem, this.x2, 0, window.innerWidth, window.innerHeight);
    }
    move(){
      this.x1 = this.x1 - this.veloc;
      this.x2 = this.x2 - this.veloc;
  
      if(this.x1 < -window.innerWidth){
        this.x1 = window.innerWidth;
      }
      if(this.x2 < -window.innerWidth){
        this.x2 = window.innerWidth;
      }
    }
}

