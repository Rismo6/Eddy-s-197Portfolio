
var blob;



var sx = 0;
var sy = 0;


function preload() {
 blob = loadJSON("eddy.json");
 blob1 = loadJSON("tino.json");
 blob2 = loadJSON("Omar.json");
}

function setup() {
  createCanvas(600,600);
  background(0);
   rectMode(CENTER);

    // this shows the whole blob json data package
  console.log(blob);
  noStroke();

}



function draw() {
 background("#00717d");

 updateToon(blob.toons[0]);  // Thrall
 updateToon(blob.toons[1]);  //Jaina
 updateToon(blob.toons[2]);   // Garrosh
 updateToon(blob1.toons[1]);
 updateToon(blob2.toons[2]);
}



function updateToon(obj) {

     push();

     if ( int(random(10)) > 8) {
      obj.nextX = int(random(obj.moveX.length));
      obj.nextY = int(random(obj.moveY.length));
     }

     obj.posX += obj.moveX[obj.nextX];
     obj.posY += obj.moveY[obj.nextY];


     // console.log(obj.posX);

      if (obj.posX > width) {
        obj.posX = 0;
      }

      if (obj.posX < 0) {
        obj.posX = width;
      }

      if (obj.posY > height) {
        obj.posY = 0;
      }

      if (obj.posY < 0) {
        obj.posY = height;
      }

      drawToon(obj);

     pop();


}



function drawToon( obj) {

   //  console.log(obj.posX[s]);

 push();
       translate(obj.posX , obj.posY);
        // head
       fill(obj.r, obj.g, obj.b, obj.a);
        
       stroke(random(0,obj.strokeR), obj.strokeG, random(0,obj.strokeB), obj.strokeA);
       for (let i = 0; i < 10; i++) {
        push();
        rotate(degrees(45));
        
        pop();
       //ellipse(0, 30, obj.petalwidth, obj.petalheight);
       polygon(0, 30, obj.petalwidth, obj.petalheight);
       
       rotate(PI/5)
       }
       //head
       
       fill(obj.r, obj.g, obj.b);
       polygon(0, 0, obj.belly, obj.torso);
       // eyes
       noStroke();
       fill(0);
       ellipse(-10, 10, 10, 10);
       ellipse(10, 10, 10, 10);
       //eyes2
       fill(255);
       
       ellipse(-8, 9, 8, 7);
       ellipse(11, 9, 8, 7);
       //torso
       
       fill(255);
       textSize(20);
       text(obj.name, -50, -((obj.belly + obj.petalwidth) +12));
       //caption
       fill(255);
       textSize(12);
       text(obj.caption, -25, ((obj.belly + obj.petalwidth) + 15));

   pop();

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