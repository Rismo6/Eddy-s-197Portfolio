class bath{

    constructor(lox, sz, color) {
        this.x = lox;
        this.y = 400;
        this.linex;
        this.liney;
        this.swordSpeed= 0.05;
        this.color = color;
        this.saveColor = color;
        this.d = sz;
        this.angle = 0;
        this.scalar =sz + 20;
        this.hit = false;
        this.score =5;
        this.gate= false;
        this.overlap = false;
        
    
        
        this.update = function(){
            
            
        }
        
        this.display = function(){
            
           //draw the sword
           this.linex = this.x + cos(this.angle) * this.scalar;
           this.liney = this.y + sin(this.angle) * this.scalar;
           strokeWeight(1);
           stroke(this.color);
           
           line(this.x, this.y, this.linex, this.liney)

           //draw person
           noStroke();
            fill(this.color);
            rect(this.x , this.y , this.d, 7);
            
            
           

          
           
        }
        
        this.collide = function(enemy){
            //are we overlapping with the enemy?
            this.overlap= collideRectCircle(this.x,this.y, this.d, enemy.x, enemy.y, enemy.d)
            //sword hitting the other player?
            this.hit = collideLineCircle(this.x,this.y, this.linex, this.liney, enemy.x, enemy.y, enemy.d);
            
            if(this.overlap == true){ // prevent from scoreing if
                if(this.gate == false){// debounce madnees so only one point/hit gets added
                    if(this.hit == true){
                        
                        this.score--
                        this.gate = true;

                        enemy.color = 'Yellow'
                        setTimeout(function(){
                        enemy.color = enemy.saveColor;
                        
                        },200)
                    }
                }
            }
        }
        
    }
}
