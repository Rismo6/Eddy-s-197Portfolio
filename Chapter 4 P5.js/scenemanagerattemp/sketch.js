// global manager object
var mgr;
var snd1,snd2;
var img1,img2,img3, img4;

function preload()
{
    // back = loadAnimation('resources/SteamDeck_Dpad.png','resources/SteamDeck_Dpad_Left.png');
    // //by default animations loop
    // back.looping= false;
    // forward = loadAnimation('resources/SteamDeck_Dpad.png','resources/SteamDeck_Dpad_Right.png');
    // //by default animations loop
    // forward.looping= false;
    // about = loadAnimation('resources/Switch_Plus.png');
    snd1 = loadSound("resources/opening.mp3");
    snd2 = loadSound("resources/laugh.mp3");

    img1 = loadImage("resources/Circus.jpg");
    img2 = loadImage("resources/Circus1.png");
    img3 = loadImage("resources/circus2.jpg");
    img4 = loadImage("resources/circus3.jpg");
    
}

// define your p5.play sprites as global objects first.


function setup()
{
    createCanvas(600, 500);

    mgr = new SceneManager();

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene ( Animation1 );
    mgr.addScene ( Animation2 );
    mgr.addScene ( Animation3 );
    mgr.addScene ( Animation4 );
    mgr.addScene ( Animation5 );

    mgr.showNextScene();
    
   
     
}

function draw()
{
    mgr.draw();
    
  
    drawSprites();
}


function mousePressed()
{
    mgr.handleEvent("mousePressed");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( Animation1 );
            break;
        case '2':
            mgr.showScene( Animation2 );
            break;
        case '3':
            mgr.showScene( Animation3 );
            break;
        case '4':
              mgr.showScene( Animation4 );
              break;
        case 'a':
              mgr.showScene( Animation5 );
              break;
    }
    
    //create a sprite
        if(key==","){
            var back = createSprite(50, 450);
            back.addAnimation('normal','resources/SteamDeck_Dpad.png','resources/SteamDeck_Dpad_Left.png');

            //set a self destruction timer (life)
            back.life = 15;
        }
        if(key=="."){
            var forward = createSprite(550, 450);
            forward.addAnimation('normal','resources/SteamDeck_Dpad.png','resources/SteamDeck_Dpad_Right.png');

            //set a self destruction timer (life)
            forward.life = 15;
        }
        if(key=="a"){
            var about = createSprite(500, 50);
            about.addAnimation('normal','resources/SteamDeck_Dpad.png','resources/Switch_Plus.png');
    
            //set a self destruction timer (life)
            about.life = 15;   
        }
   
    
    // ... then dispatch via the SceneManager.
    mgr.handleEvent("keyPressed");
}

