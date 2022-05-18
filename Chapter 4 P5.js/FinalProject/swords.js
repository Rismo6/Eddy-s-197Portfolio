
class swords{
    
    constructor(color, sz, speed, controls)
    {
        this.x = 150;
        this.y = 400;
        this.linex;
        this.liney;
        this.speed = speed;
        this.swordSpeed= 0.05;
        this.color = color;
        this.saveColor = color;
        this.d = sz;
        this.angle = 0;
        this.scalar =sz + 20;
        this.hit = false;
        this.score = 5;
        this.gate= false;
        this.overlap = false;
       
        this.update= function(){
            fill(0);
            //draw the score
            textSize(20);
            
            
          }
        
          this.disp = function(){
              //move the player
              
              if( keyIsDown( controls[0] )){
                //up
                this.y -= 0
              }
              if( keyIsDown( controls[1] )){
                // right
                this.x += this.speed
              }
              if( keyIsDown( controls[2] )){
                //down
                this.y += 0
              }
              if( keyIsDown( controls[3] )){
              //left
              this.x -= this.speed
              }
              if( keyIsDown( controls[4] )){
                this.scalar -= 2;
              }
              if( keyIsDown( controls[5] )){
                this.scalar += 2;
              }
        
            //loop around the edges
            if(this.x < 0){
              this.x = width;
            }
            if(this.x > width){
              this.x = 0;
            }
            if(this.y < 0){
              this.y = height;
            }
            if (this.y > height){
              this.y = 0;
            }
            //draw the sword
            noFill();
            stroke("Yellow"); 
            arc(this.x + this.scalar, this.y , this.linex, this.liney, PI, TWO_PI);
            this.linex = this.x + cos(this.angle) * this.scalar;
            this.liney = this.y + sin(this.angle) * this.scalar;
            strokeWeight(5);
            noStroke();
            this.line = line(this.x,this.y,this.linex +120,this.liney)
        
            //draw the player
            noStroke();
            fill(this.color);
            ellipse(this.x,this.y,this.d,this.d);
            
            //draw scoretext
            textSize(14);
            text(this.score, 450, 50);
            text("/5", 462, 50);
            
            
          }
        
          this.collide = function(enemy){
            
            this.overlap = collideCircleCircle(this.x,this.y,this.d,enemy.x,enemy.y,enemy.d) // are we overlapping with the enemy?
            this.hit = collideLineCircle(this.x, this.y, this.linex, this.liney, enemy.x, enemy.y, enemy.d); //sword hitting the other player?
            if(this.hit){ //change color!
                fill("Yellow")
            }else{
                fill("White")
            }  
            
            if(this.overlap == false){ // prevent from scoreing id overlapped
              if(this.gate == false){ //debounce madness so only one point/hit gets added
                if(this.hit == true){
                  this.score--;
                    this.gate = true;
                        
                        //quickly changes the enemy's color red for
                        enemy.color = 'Yellow'
                        setTimeout(function(){
                            enemy.color = enemy.saveColor;
                        }, 100)
                        
                            
                        
                    }
                }
            }
           if(this.hit == false){

               this.gate= false;
           }

           

           
           
        }
       
        

    
        }//colse swordObject

    
}