let t = 0;
let inc = 3.14/50;
let rds;
let r = 0;
let g = 170;
let b = 150;
function setup() {
  createCanvas(500,500);
  background(24, 29, 49);
  stroke(255, 100,0);
  fill(255,100,0, .07);
  
}


function draw() {
  
  let h = hour();   // 0-23
 let m = minute(); // 0- 59
 let s = second();  // 0-59

 push();
 // input, input range,scaleoutput low, scaleoutput high
 let mh = map(h,0,23,0,100);
 let mm = map(m,0,59,0,100);
 let ms = map(s,0,59,0,100);
 
    translate(width/2, height/8);
    //minutes
    stroke(232, 125, 29);
    polygon(mm +cos(t)*mm, mm+ sin(t) * mm, rds, 6);
   //hours
    stroke(219, 144, 28);
    polygon(mh +cos(t)*mh, mh+ sin(t) * mh, rds,6);
    //seconds
    stroke(0,170,150);
    polygon(ms +cos(t)*ms, ms+ sin(t) * ms, rds, 6);
    
    t= t+ inc;
  pop();

  

  push(); 
 
     //minutes
     stroke(232, 125, 29);
     polygon(mm +cos(t)*mm, mm+ sin(t) * mm, mm, mm);
    //hours
     stroke(127, 197, 220);
     polygon(mh +cos(t)*mh, mh+ sin(t) * mh, mh,mh);
     t= t+ inc;
    pop();
    //seconds
    stroke(0,170,150);
    polygon(ms +cos(t)*ms, ms+ sin(t) * ms, rds , 6);

  
  // y+=1;
  if(ms>3){
   rds=6;
  }
  
  if(ms>6){
  rds=10;

  }
  
  if (ms>99){
    
    
     
  } else {
    rds=5;
    
  }
}
  
  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  
 function star(lox, loy){
  let h = hour();   // 0-23
  let m = minute(); // 0- 59
  let s = second();  // 0-59
 
  push();
  // input, input range,scaleoutput low, scaleoutput high
  let mh = map(h,0,23,0,100);
  let mm = map(m,0,59,0,100);
  let ms = map(s,0,59,0,100);
  
     translate(width/2, height/8);
     //minutes
     stroke(232, 125, 29);
     polygon(mm +cos(t)*mm, mm+ sin(t) * mm, rds, 6);
    //hours
     stroke(219, 144, 28);
     polygon(mh +cos(t)*mh, mh+ sin(t) * mh, rds,6);
     //seconds
     stroke(0,170,150);
     polygon(ms +cos(t)*ms, ms+ sin(t) * ms, rds, 6);
     
     t= t+ inc;
   pop();
 }