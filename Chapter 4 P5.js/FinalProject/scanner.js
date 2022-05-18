
class box{
    
    constructor(lox, loy, color, color2, hit) {
    this.x= lox;
    this.y= loy;
    this.c= color;
    this.c2= color2;
    this.h= hit;
    this.score = 0;
    this.img;
    }
    
    update(){
        this.collider();
        
    }
    
    display(){
        
        
       
        circle(this.x, this.y, 20);
        noFill();
        //image boardcode
        this.img = image(img1,mouseX, mouseY, 100,100);
        
       this.h = collidePointCircle(mouseX, mouseY, this.x, this.y, 100);
    
        // Use vectors as input:
        // const mouse  = createVector(mouseX, mouseY);
        // const circle = createVector(200, 200);
        // const diam   = 100;
        // hit = collidePointCircleVector(mouse, circle, diam);
        //draw scoretext
        textSize(14);
        fill(0);
        text(this.score, 440, 50);
        text("amount", 460, 50);
       this.collider();
       

       
    }

    collider()
    {
        
        if(this.h){ //change color!
            fill(this.c)
            this.score ++;
            
        }else{
            fill(this.c2)
            this.score =0;
        }   
        
    }
}