let r =0;
let g =0;
let b =0;

let x;
let y;



let t = 0;
let inc = 3.14/50;

let currentkey = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  fill(0);
  text("Press 'q' or 'Q' to create a new canvas", 250,200);
  fill(250,250,250);
  stroke(0,0,0);
}

function draw(){ 
  //ebpalette();
  eb2newcanvas();
 
  if(mouseIsPressed){
  ebdrawChoice();
  }
   
}

function ebdrawChoice(){
  
  
  if( key == '1' ){
    ebcd(1,3);
     print("1");
     
  }
  
  if( key == '2' ){
   ebcds();
     print("2");
     
  }
  
 if( key == '3' ){
    ebtri();
     print("3");
   
 }
 if( key == '4' ){
  ebline();
  
   print("4");
 
}
  
}


function mousePressed(){
  currentkey++;
  if(currentkey=3){
    currentkey=0;
  }
}


function ebpalette(){
  //chart for loop
  fill(100,100,100);
  for(var x=5; x< 100; x= x+32){
    for(var y=150; y<250; y= y+ 32){ 
     rect(x ,y ,30,30);
    
    } 
  }
}

function eb2newcanvas(){
  stroke(0,0,0);
  if(key =='q' || key=='Q'){
   r= 250;
   g= 250;
   b=250;
   fill(r,g,b);
   rect(0,0,windowWidth,windowHeight);
   print("clearpage");
   
  }
}

function ebcd( s, s2){
  push();
    strokeWeight(s);
    point(mouseX +cos(t)*50, mouseY+ sin(t) * 50);
    t= t+ inc;
  pop();
  
  push();
    
    fill(0, 0, 0);
    circle(mouseX, mouseY, s2);
  pop();
}

function ebcds(){
  push();
  strokeWeight(1);
    line(mouseX +cos(t/2)*50, mouseY+ sin(t/2) * 50, (mouseX+20) + cos(t/2)*50, (mouseY+20)+ sin(t/2) * 50);
    t= t+ inc;
  pop();
}

function ebtri(){
  push();
  fill(random(0,250));
  stroke(2);
  triangle(mouseX, mouseY, mouseX , mouseY+ 100, mouseX +100, mouseY);
  pop();
}

function ebline(){
  push();
  //rotate(radians(60));
line(mouseX , mouseY, mouseX+30, mouseY + 30);

  pop();
  
}

function ebe(){
  push();
  stroke(250);
  fill(250);
  circle(mouseX,mouseY,50);
  pop();
}