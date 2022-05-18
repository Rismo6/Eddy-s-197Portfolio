
// =============================================================
// =                         BEGIN SCENES                      = 
// =============================================================


var mgr;
var mgr = new SceneManager();

function Animation1()
{
    
   
    this.setup = function()
    {
        
      background("teal");
      textAlign(CENTER);
      
      textSize(20);
    }
  
  // enter() will be executed each time the SceneManager switches
  // to this animation
  // Note: Animation1() doesn't have setup() or draw()
  this.enter = function()
  {
     
    
      background("teal");
      
      stroke(255,255,255);
      
      fill("black");
      text("Press keys 1, 2, 3, 4 to jump to a particular animation\n" + 
          "Press the A to skip to the About page\n" +
          "Press the key(,) key(.) to navigate left and right between scenes", width / 2, height / 2);

          if (snd1.isPlaying()) {
            // .isPlaying() returns a boolean
                snd1.pause(); // .play() will resume from .pause() position
            //  background(255, 0, 0);
            } else {
                snd1.play();
              //background(0, 255, 0);
            }
  }

  this.draw = function()
  {
    background(255);
    image(img1,0,0,width,height);
    push();
    text("Press keys 1, 2, 3, 4 to jump to a particular animation\n" + 
          "Press the A to skip to the About page\n" +
          "Press the key(,) key(.) to navigate left and right between scenes", width / 2, height / 2);
    // ellipse(0,0,30,30);
    
    
  }

//   this.update = function()
//   {
//     button.position(50, 450);
//       button.mousePressed(mgr.showScene(Animation2));
//   }
  this.keyPressed = function()
  {
      switch(key)
    {
        case ',':
            mgr.showScene( Animation5 );
            break;
        case '.':
            mgr.showScene( Animation2 );
            break;
      }
  }
  this.mousePressed = function()
  {
    
    snd1.pause;
    
  }
}


function Animation2()
{
    let box1;
    // let buttb;
    //button callback example
  this.setup = function()
  {
    box1= new box(100,  400,color(255,0,0), color(255,150,0), false);
    
    // buttb = createButton('Pre scene');
    // buttb.position(50, 450);
  }
  this.enter = function()
  {
    snd1.pause();
    
  }

  this.update = function()
  {
    
    // buttb.mousePressed(mgr.showScene(Animation1));
    // buttb.position(-50,-50);
  }
  this.draw = function()
  {
    background("red");
    image(img2,0,0,width,height);
    box1.update();
    box1.display();
    
  } 

  
  this.keyPressed = function()
  {
    switch(key)
    {
        case ',':
            mgr.showScene( Animation1 );
            break;
        case '.':
            mgr.showScene( Animation3 );
            break;
    }
  }
  this.mousePressed = function()
   {

        snd2.play();
   }

}


// When defining scenes, you can also 
// put the setup, draw, etc. methods on prototype
function Animation3()
{
    this.y = 0;
    let box1;
    
    //button callback example
    this.enter = function()
    {
        snd1.pause();
    }
    this.setup = function()
    {
        box1= new box(width/2,height/8,color(255,150,0), color(0,150, 250), false);
    }

    this.draw = function()
    {
        background(150,150,0);
        image(img3,0,0,width,height);
        box1.update();
        box1.display();
   
    }

    this.keyPressed = function()
    {
      switch(key)
      {
          case ',':
              mgr.showScene( Animation2 );
              break;
          case '.':
              mgr.showScene( Animation4 );
              break;
        }
    }
}


function Animation4()
{
    this.y = 0;
    let box1;

    this.enter = function()
    {
    snd1.pause();
    }

    this.setup = function()
    {
        box1 = new box(500,400,color(150,150,0),color(0,150,20),false);
    }
    this.draw = function()
    {
        background(250,250,0);
        box1.update();
        box1.display();
    }

    this.keyPressed = function()
    {
      switch(key)
      {
          case ',':
              mgr.showScene( Animation3 );
              break;
          case '.':
              mgr.showScene( Animation5 );
              break;
        }
    }
    
}

function Animation5()
{
    this.y = 0;
    
    
    this.enter = function ()
    {
        snd1.pause();
        background("grey");
        textAlign(CENTER);
        textSize(18);
        stroke(0, 0, 0);
        text('About this Sketch:\n'+
        'In this sketch I used\n'+' the p5.collider2D to animate the scenes\n',  width/2, height/2);
    }
    
    

    this.keyPressed = function()
    {
      switch(key)
      {
          case ',':
              mgr.showScene( Animation4 );
              break;
          case '.':
              mgr.showScene( Animation1 );
              break;
        }
    }
    
}