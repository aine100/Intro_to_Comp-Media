
  //ICM Fall2019
  //WEEK 1: Sketch
  //Themis Garcia

  function setup() {
  createCanvas(500, 600);
  }



  function draw() {
  colorMode(RGB);
  background(255, 228, 196);

  //ARC
  //arc(position x, positiony, width, height, starting position (PI is semi circle, ending position, close semi circle);
  noStroke();
  fill(240, 255, 255);
  arc(250, 175, 200, 200, PI, 0, CHORD);
  fill(176, 196, 222, 200);
  arc(250, 200, 200, 200, 0, PI, CHORD);




  //CACTUS' SPINES
  stroke(0);

  for (var position_y1_y2 = 280; position_y1_y2 < 500; position_y1_y2 += 20) {
    line(235, position_y1_y2, 415, position_y1_y2);
  }


  //FAN SPINES
  line(325, 300, 250, 240);
  line(325, 300, 280, 215);
  line(325, 300, 325, 205);
  line(325, 300, 375, 215);
  line(325, 300, 400, 240);




  //RECT CACTUS
  // Rect roundness:top-left = 20, top-right = 15,     bottom-right = 10,  bottom-left = 5.

  fill(60, 179, 113);
  rect(250, 225, 150, 400, 80, 80, 5, 5);

  fill(102, 205, 170);
  rect(300, 225, 50, 400, 25, 25, 0, 5);


  for (var position_y = 240; position_y < 500; position_y += 20) {
      point(325, position_y);
    }


  //TRIANGLE CACTUS
  // Parameters
  //izq.abajo
  // x1	Number: x-coordinate of the first point
  // y1	Number: y-coordinate of the first point
  //punta arriba
  // x2	Number: x-coordinate of the second point
  // y2	Number: y-coordinate of the second point
  //der.abajo
  // x3	Number: x-coordinate of the third point
  // y3	Number: y-coordinate of the third point

  triangle(100, 510, 45, 400, 200, 510);

  fill(127, 255, 212, 200);
  triangle(100, 510, 120, 320, 200, 510);

  fill(32, 178, 170, 200);
  triangle(100, 510, 225, 350, 200, 510);

  //triangle cactus circles
  fill(255)
  circle(75, 430, 10);
  circle(90, 455, 10);
  circle(130, 375, 10);
  circle(120, 410, 10);
  circle(135, 450, 10);
  ellipse(155, 485, 10);
  ellipse(190, 460, 10);
  ellipse(200, 400, 10);

  // POT
  //quad (left up coner x1, y1, Right up corner x2, y2, Right down corner x3, y3, left up coner x4, y4)
  fill(240, 128, 128);
  quad(55, 500, 450, 500, 425, 600, 85, 600)

  fill(205, 92, 92);
  quad(375, 500, 450, 500, 425, 600, 300, 600);

}
