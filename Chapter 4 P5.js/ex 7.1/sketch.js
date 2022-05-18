
        // example #7.2
        // this is a 7x7 array
        var gridarr = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 2, 2, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 0, 2, 2, 2, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0, 2, 2, 2, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 0],
        [0, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 2, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 0, 0, 0, 0],
        [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 3, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 3, 3, 0, 0, 0],
        [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0],
        [0, 0, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0],
        [0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 0],
        [0, 0, 3, 3, 3, 3, 0, 1, 1, 0, 3, 3, 3, 3, 3, 3],
        [0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3],
        [0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3],
        [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 1, 1, 1, 0, 3],
        [0, 0, 1, 1, 0, 0, 3, 3, 3, 0, 1, 1, 1, 1, 1, 0]
        ];
        var gridarr1 = [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 1, 1, 0, 1, 1],
          [0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 2, 2, 2, 1, 1, 0],
          [0, 0, 0, 0, 2, 1, 2, 2, 2, 2, 0, 2, 2, 2, 0, 1],
          [0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 0, 2, 2, 2, 1],
          [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2, 0, 2, 2, 0],
          [0, 0, 0, 1, 0, 0, 3, 3, 0, 0, 1, 2, 2, 0, 2, 0],
          [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 1, 0, 2, 2, 0],
          [0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 3, 0, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 3, 1, 1, 2, 0],
          [0, 0, 0, 0, 0, 1, 3, 3, 3, 0, 1, 0, 0, 0, 0, 2],
          [0, 0, 0, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 2, 0, 0],
          [0, 0, 2, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 2, 2, 0],
          [0, 0, 2, 2, 2, 0, 0, 0, 1, 1, 0, 0, 2, 2, 2, 0],
          [0, 0, 0, 2, 2, 0, 1, 1, 2, 2, 1, 0, 2, 2, 0, 0],
          [0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 1, 0, 0, 1, 0],
          [0, 0, 0, 1, 0, 2, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0],
          [0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 0],
          [0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0],
          [0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0],
          [0, 0, 1, 1, 0, 0, 2, 2, 2, 2, 2, 0, 1, 1, 0, 0]
          ];

        var a = 0;
        var t=0;
        function setup() {

        createCanvas(540, 840);

        background(120);
        noStroke();
          
        }
        function draw(){
         keyPressed();
          
        }
        function hface(){
          for (var i = 0; i < 24; i++) {
            for (var j = 0; j < 16; j++) {
              a = gridarr[i][j];
                  if (a === 1) {
                    fill(175, 75, 0);
                  }else if (a === 2) {
                    fill(74, 44, 4);
                  } else if (a === 3) {
                    fill(0, 70, 250);
                  }else {
                    fill(0, 0, 70);
                    }

              // typical way of mapping out a grid (counter * scale) + offset
              // where counter is a var from the forloop
              // scale is value that will term the size/position of each drawing
              // offset is a relative movement to place
              // the grid collection around on the canvas

              rect((j * 20) + 15, (i * 20) + 15, 20, 20);
            }
        }
        }
        function sface(){
          for (var i = 0; i < 24; i++) {
            for (var j = 0; j < 16; j++) {
              a = gridarr1[i][j];
                  if (a === 1) {
                    fill(250, 250, 250);
                  }else if (a === 2) {
                    fill(250, 44, 0);
                  } else if (a === 3) {
                    fill(252, 186, 101);
                  }else {
                    fill(0, 0, 70);
                    }

              // typical way of mapping out a grid (counter * scale) + offset
              // where counter is a var from the forloop
              // scale is value that will term the size/position of each drawing
              // offset is a relative movement to place
              // the grid collection around on the canvas

              rect((j * 20) + 15, (i * 20) + 15, 20, 20);
            }
        }
        }

        function lface(){
          for (var i = 0; i < 24; i++) {
            for (var j = 0; j < 16; j++) {
              a = gridarr1[i][j];
                  if (a === 1) {
                    fill(250, 250, 250);
                  }else if (a === 2) {
                    fill(250, 44, 0);
                  } else if (a === 3) {
                    fill(252, 186, 101);
                  }else {
                    fill(0, 0, 70);
                    }

              // typical way of mapping out a grid (counter * scale) + offset
              // where counter is a var from the forloop
              // scale is value that will term the size/position of each drawing
              // offset is a relative movement to place
              // the grid collection around on the canvas

              ellipse((j * 20) + 15, (i * 20) + 15, 20, 20);
            }
        }
        }
        function tface(){
          for (var i = 0; i < 24; i++) {
            for (var j = 0; j < 16; j++) {
              a = gridarr1[i][j];
                  if (a === "F") {
                    fill(250, 250, 250);
                  }else if (a === "I") {
                    fill(250, 44, 0);
                  } else if (a === "N") {
                    fill(252, 186, 101);
                  }else {
                    fill(0, 0, 70);
                    }

              // typical way of mapping out a grid (counter * scale) + offset
              // where counter is a var from the forloop
              // scale is value that will term the size/position of each drawing
              // offset is a relative movement to place
              // the grid collection around on the canvas

              ellipse((j * 20) + 15, (i * 20) + 15, 20, 20);
            }
        }
        }
        function keyPressed() {
          if (keyCode === LEFT_ARROW) {
            sface();
          } else if (keyCode === RIGHT_ARROW) {
            hface();
          } else if (keyCode === DOWN_ARROW) {
            lface();
          }else if (keyCode === UP_ARROW) {
          tface();
        }
        } 
        

        

