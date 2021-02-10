class Drop{
    constructor(x,y,r){
        this.posX = x
        this.posY = y
        this.radius = r
        this.image = loadImage("snow.png")
        
    }
    show(){
        fill ("blue")
        //ellipseMode (CENTER)
        //ellipse(this.posX,this.posY,this.radius,this.radius)
        image(this.image,this.posX,this.posY,this.radius,this.radius)


    }

    fall(){
        this.posY = this.posY + random(2,5)
        if(this.posY>height ){

            this.posY = 0
            
        }
    }
}
