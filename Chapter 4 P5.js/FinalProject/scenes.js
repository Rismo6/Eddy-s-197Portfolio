

 let timer = 25;

function Intro()
{
 
  
  this.setup = function()
  {
    background("Green");
    textAlign(CENTER);
    
    textSize(20);
  }

  

  this.draw=function()
  {
    
    background("Green");
    
    
    drawIntroScreen();  
  }

  this.keyPressed = function()
  {
      if ( key == '1')
      {
          // Invoke the Game scene passing as argument the string '1' or '2'
          this.sceneManager.showScene( Game);
      }
  }

  function drawIntroScreen()
  {
    var ball = { x : width / 2, y : height / 2, size : height / 2 };
        
        textSize(24);
        textAlign(CENTER);
        fill("yellow");
        text("Life in a couple of seconds", width / 2, 50);

        ellipse( ball.x, ball.y, ball.size );

        fill("black");
        textSize(12);

        text("Press key 1  to start\nthe game", width / 2, height / 2 - 30);
        text("[1] - Game:\n What if the day only lasted 25 seconds?", width / 2, height / 2 + 20);
        


        // if ( Math.floor(frameCount / 30) % 2 == 0 ) 
        // {
        //     text("Select mode to start game...", width / 2, height - 20);
        // }

        // if ( dist( mouseX, mouseY, ball.x, ball.y ) < ball.size / 2  )
        // {
        //     noFill();
        //     ellipse( ball.x, ball.y, ball.size + 10 );
        // }
    
  }

}


function Game()
{
 
 var b1,p1;
var p1controls = [87,68,83,65,81,69] //up,right,down,left,HIT (WDSAE)
  
  this.setup = function()
  {
    
    background("Yellow");
    textAlign(CENTER);
    textSize(20);
    b1= new bath(315, 100, 'white' );
    p1 = new swords('green', 100, 3, p1controls);
  }

  
    this.draw=function()
    {
      
      background("Gray");
      text(timer, 50, 50);
      textSize(20);
      text("Do your business!\nUse E and Q to adjust the\n pressure",width/4, 50);
      if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
      }
      if (timer == 0) {
        text("GAME OVER", width/2, height*0.7);
      }
      p1.disp();
      p1.collide(b1);
      b1.display();
      b1.collide(p1);
     
      fill(255);
      rect(400,305,75,100);
      rect(430,400,40,100);
     
  arc(390, 405, 140, 140,0, PI, QUARTER_PI, OPEN);
      
      //draw and collide the players
     
      //colliders objs rect and circle
      

    }
      
    

    this.keyPressed = function(){
      if(timer <= 20){
        this.sceneManager.showScene( Game1);
      }
    }
 
}

function Game1()
{ 
  var p1, p2, p3;
var p1controls = [87,68,83,65,69] //up,right,down,left,HIT (WDSAE)
var p2controls = [73,76,75,74,85] //up,right,down,left,HIT (ILKJU)
  var me = this;
  this.setup = function()
  {
    
   
    textAlign(CENTER);

    textSize(20);
  p1 = new playerObj('green', 100, 3, p1controls)
	p2 = new playerObj('blue', 50, 0, p2controls)
  p3 = new playerObj('turquoise', 0, 0, 0)
  }

  this.enter = function()
  {
   

    
  }
    this.draw=function()
    {
      
      background("Turquoise");
      text(timer, 50, 50);
      textSize(20);
      text("Clean the mess\n Use E to rotate the mop ", width/4,50);
      if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
      }
      if (timer == 0) {
        text("GAME OVER", width/2, height*0.7);
      }
      p3.disp();
      p3.collide(p2);
      p1.disp();
      p1.collide(p2);
      p1.update();
      p2.disp();
      p2.collide(p3);

      
      
    }
    
    this.keyPressed = function(){
      if(timer <= 15){
        this.sceneManager.showScene( Game2);
      }
    }
    
    function playerObj(color, sz, speed, controls){
      this.x = random(width);
      this.y = 400;
      this.line;
      this.linex;
      this.liney;
      this.speed = speed;
      this.swordSpeed = 0.05
      this.color = color;
      this.saveColor = color;
      this.d = sz;
      this.angle = 0;
      this.scalar = sz + 20;
      this.hit = false
      this.score = 0;
      this.gate = false;
      this.overlap = false;
      
      this.update= function(){
        fill(0);
        //draw the score
        textSize(20);
        text(this.score, 450, 50);
        
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
            this.angle += this.swordSpeed ;
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
        this.linex = this.x + cos(this.angle) * this.scalar;
        this.liney = this.y + sin(this.angle) * this.scalar;
        strokeWeight(1);
        stroke(this.color);
        this.line = line(this.x,this.y,this.linex,this.liney)
    
        //draw the player
        noStroke();
        fill(this.color);
        ellipse(this.x,this.y,this.d,this.d);
        
        //draw scoretext
        textSize(14);
        text("/3", 462, 50);
        
        
      }
    
      this.collide = function(enemy){
        
        this.overlap = collideCircleCircle(this.x,this.y,this.d,enemy.x,enemy.y,enemy.d) // are we overlapping with the enemy?
        this.hit = collideLineCircle(this.x, this.y, this.linex, this.liney, enemy.x, enemy.y, enemy.d); //sword hitting the other player?
        
        
        if(this.overlap == false){ // prevent from scoreing id overlapped
          if(this.gate == false){ //debounce madness so only one point/hit gets added
            if(this.hit == true){
              this.score++
              enemy.x = random(width);
              enemy.y = random(550,400);
              

              this.gate = true;
            if(this.score>=5){
              enemy.d =0;
              enemy.x = -100;
              enemy.y = -100;
            }
            
              //quickly change the enemy's color to red for 100ms
              enemy.color = 'red'
              setTimeout(function(){
                enemy.color = enemy.saveColor;
                
              },100)
              
              
            }
          }
          
        }
    
        if(this.hit == false){
          this.gate = false;
          
        }
        
      }

      
      
    } // close playerObj
  
}

function Game2()
{
 
  var lox = width/2;
  var loy = 400;
  var kox = random(50,400);
  var koy = random(50,500);
  
  
  this.setup = function()
  {
    
   
    textAlign(CENTER);

    textSize(20);
  }

  this.enter = function()
  {
   

    
  }
    this.draw=function()
    {

      background("Orange");
      text(timer, 50, 50);
     
      if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
      }
      if (timer == 0) {
        text("GAME OVER", width/2, height*0.7);
      }
      textSize(20);
      text("Find your keys\n Look around with the Arrow Keys", width/4, 50);
      fill(240,240,0);
      stroke(250,250,0);
      rect(lox,loy, 150,150);
      fill("Orange");
      stroke("orange");
      //key shape
      circle(kox,koy,40);
      rect(kox - 19, koy, 38, 65);
      rect(kox - 19, koy, 25, 90);
      rect(kox - 19, koy, 15, 100);
      // key text
      textSize(12);
      text("Click\n me!", kox+ 22, koy);
      if (keyIsPressed) {
        if (keyCode == RIGHT_ARROW) {
         lox +=5; 
        }  else if (keyCode == LEFT_ARROW) {
          lox -= 5;
         } else if (keyCode == UP_ARROW) {
           loy -= 5;
            
         } else if (keyCode == DOWN_ARROW) {
           loy +=5; 
        
          }
        }
          //loop around the edges
        if(lox < 0){
          lox = width;
        }
        if(lox > width){
          lox = 0;
        }
        if(loy < 0){
          loy = height;
        }
        if (loy > height){
          loy = 0;
        }
        this.keyPressed = function(){
          if(timer <= 10){
            this.sceneManager.showScene( Game3);
          }
        }
          this.mousePressed = function(){
            if(timer >= 10){
              
              this.sceneManager.showScene( Game3);
            }
          
        }
      
      }
    }
  

function Game3()
{
 
  this.setup = function()
  {
   
   
    textAlign(CENTER);

    textSize(20);
  }

  this.enter = function()
  {
   box1= new box(width/2,height/2, 50, color(250,0,0), color(70), false);

    
  }
    this.draw=function()
    {

      background("Turquoise");
      text(timer, 50, 50);
     
      if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
      }
      if (timer == 0) {
        text("GAME OVER", width/2, height/2);
      }
      textSize(20);
     text(" Fill it up\n Use the mouse to insert the nozzle",width/4, 50);
      box1.update();
      box1.display();
      
    }
    this.mouseMoved = function(){
      if(timer <= 5){
        this.sceneManager.showScene( Game4);
      }
    }
}

function Game4()
{
  var score =0;
 
this.setup = function(){
  textAlign(CENTER);

  textSize(20);
}
  this.draw = function(){
    background("Gray");
    textSize(20);
    text(timer, 50, 50);
    text(score, 450, 50);
      if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
      }
      if (timer == 0) {
        text("GAME OVER", width/2, height/2);
      }
      textSize(30);
      text("Up, Down, Up, Down!\nClick to Exercise", width/4, 50);
    if(mouseIsPressed)
    img2.play();
  else
    img2.stop();

    animation(img2, width/2, height/2 );

    if(img2.play()){
       score++;
    }
   
  }

  // this.setup = function()
  // {
    
   
  //   textAlign(CENTER);

  //   textSize(20);
  // }

  // this.enter = function()
  // {
   

  //   text("Go4",width/2, height/2);
  // }
  //   this.draw=function()
  //   {

  //     background("Purple");
  //     text(timer, 50, 50);
     
  //     if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
  //       timer --;
  //     }
  //     if (timer == 0) {
  //       text("GAME OVER", width/2, height/2);
  //     }
  //     rect(lox,loy, 100, 100);
  //     if (keyIsPressed) {
  //       if (keyCode == RIGHT_ARROW) {
  //        lox +=5; 
  //       }  else if (keyCode == LEFT_ARROW) {
  //         lox -= 5;
  //        } //else if (keyCode == UP_ARROW) {
  //       //   loy -= 5; 
  //       // } else if (keyCode == DOWN_ARROW) {
  //       //   loy +=5; 
  //       // }
  //       }
  //   }
    this.mousePressed = function(){
      if(timer <= 1){
        this.sceneManager.showScene( End );
      }
    }
}

function End()
{
  this.setup = function()
  {
    background("Red");
    textAlign(CENTER);

    textSize(20);
  }

  this.enter = function()
  {
    background("Red");

    
  }
    this.draw=function()
    {
      background("Red");
      
      text(timer, 50, 50);
     
      if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
      }
      if (timer == 0) {
        text("GAME OVER", width/2, height/2);
      }
     
    }
    this.keyPressed = function()
    {
        this.sceneManager.showScene( Intro );
    }
}
  

