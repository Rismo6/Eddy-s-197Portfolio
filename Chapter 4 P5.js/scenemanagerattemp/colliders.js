
class box{
    
    constructor(lox, loy, color, color2, hit) {
    this.x= lox;
    this.y= loy;
    this.c= color;
    this.c2= color2;
    this.h= hit;
    
    }
    
    update(){
        this.collider();
        
    }
    
    display(){
        
        
       
        circle(this.x, this.y, 100);
        point(mouseX, mouseY);
    
       this.h = collidePointCircle(mouseX, mouseY, this.x, this.y, 100);
    
        // Use vectors as input:
        // const mouse  = createVector(mouseX, mouseY);
        // const circle = createVector(200, 200);
        // const diam   = 100;
        // hit = collidePointCircleVector(mouse, circle, diam);
    
       this.collider();
       
    }

    collider()
    {
        if(this.h){ //change color!
            fill(this.c)
        }else{
            fill(this.c2)
        }   
    }
}
