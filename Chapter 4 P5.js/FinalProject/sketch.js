// global manager object
var mgr;
var img1, img2, img3;
var snd;

function preload()
{
    img1 = loadImage("resources/gas-nozzle.jpg");
    img2 = loadAnimation('resources/pushhold1.png','resources/pushdown1.png');

    
    
}

function setup()
{
    createCanvas(500,600);
    
    mgr = new SceneManager();
    mgr.wire();
    mgr.showScene( Intro );
    
    

    mgr.showNextScene();
   
   

    
   
}



// function update()
// {

    
// //     // You can optionaly handle the key press at global level...
// //     if(t<=3)
// //     {
// //         mgr.showScene( Game );
// //     }if(s<=6)
// //     {
// //         mgr.showScene( End );
// //     } else{
// //         mgr.showScene( Intro );
// //     }
// // if(t>7){
// //     t=0;
// // }
// //     t++;
// }

