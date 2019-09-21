//WEEK2 - ANIMATION AND MOUSE INTERACTION
//ICM Fall-2019 - Sep12
//Themis Garcia

//Circle Diameter
let diametro = 100;

//Rectangle Size
let square1 = {
  rectanguloX: 100,
  rectanguloY: 275,
  rectsizeX: 50,
  rectsizeY: 50,
};

let squareshadow1 = {
  rectanguloX: 110,
  rectanguloY: 285,
  rectsizeX: 50,
  rectsizeY: 50,
};

let square2 = {
  rectanguloX: 0,
  rectanguloY: 200,
  rectsizeX: 20,
  rectsizeY: 20,
};

function setup() {
  createCanvas(random(400, 1000), 400);
}

function draw() {

  background(47, 79, 79);
  noStroke();
  smooth();

  //I have to define the position  of each circle in draw, because is comparing with the size of the canvas. and I can not use this comparassion until the canvas is created.

  let circulo1 = {
    posicionX: width * 0.333 / 2,
    posicionY: height * 0.25,
  };

  let circulo2 = {
    posicionX: width * 0.50,
    posicionY: height * 0.25,
  };

  let circulo3 = {
    posicionX: width * 0.83,
    posicionY: height * 0.25,
  };

  //Drawing rectangle in relation to the size of the canvas
  //rect(positionX,positionY,sizeX,sizeY);
  //I tried use the "width" and "height" dividing and multiplying to see difference. When use multiplication is like use percentege (width * .50). Dividing (600/3=200 or width/3)

  // Long Dark Rectangle below buttons

  fill(70, 70, 70, 100);
  rect(width * 0, height * 0, width, height * 0.55);

  //First Rectangle
  fill(95, 158, 160);
  rect(width * 0, height * 0, width / 3, height * 0.50);

  //Second Rectangle
  fill(32, 178, 170, 100);
  rect(width / 3, 0, width / 3, height / 2);

  //Third Rectangle
  fill(95, 158, 160);
  rect(width / 3 * 2, 0, width / 3, height / 2);


  //Movable Square
  fill(32, 178, 170);
  rect(square1.rectanguloX, square1.rectanguloY, square1.rectsizeX,
    square1.rectsizeY);

  //Animated Pink Square
  fill(240, 128, 128);
  rect(square2.rectanguloX, square2.rectanguloY, square2.rectsizeX,
    square2.rectsizeY);

  square2.rectanguloX += 2
  if (square2.rectanguloX >= width) {
    square2.rectanguloX = 0 - square2.rectsizeX;
  }

  //CIRCLE 1

  //For the first circle, create Variable to calculate distance. Distance is a number calculate between two points: compare the position of the mouse with the position of circle.
  let distanciaCirculo1 = dist(mouseX, mouseY, circulo1.posicionX, circulo1.posicionY);

  //color of circle without pressing mouse
  fill(47, 79, 79);
  circle(circulo1.posicionX, circulo1.posicionY, diametro);


  if (mouseIsPressed) {

    // distanciaCirculo1 is dist

    if (distanciaCirculo1 < diametro / 2) {

      //When circle pressed

      //Shadow of the circle

      fill(105, 105, 105, 100);
      circle(circulo1.posicionX, circulo1.posicionY, diametro + 15);

      //change of color when circle pressed

      fill(240, 128, 128);
      circle(circulo1.posicionX, circulo1.posicionY, diametro);

      //Movin square to left
      rect(square1.rectanguloX -= 3, square1.rectanguloY, square1.rectsizeX, square1.rectsizeY);

    }

  } // Close mouseIsPressed


  // CIRCLE 2

  let distanciaCirculo2 = dist(mouseX, mouseY, circulo2.posicionX, circulo2.posicionY);

  //Color of random in Square
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);


  fill(47, 79, 79);
  circle(width * 0.50, height * 0.25, diametro);


  if (mouseIsPressed) {
    if (distanciaCirculo2 < diametro / 2) {

      //Shadow of the circle

      fill(85, 85, 85, 100);
      circle(circulo2.posicionX, circulo2.posicionY, diametro + 15);

      //change of color when circle pressed

      fill(240, 128, 128);
      circle(width * 0.50, height * 0.25, diametro);

      //Square random colors
      fill(r, g, b, 200);
      rect(square1.rectanguloX, square1.rectanguloY, square1.rectsizeX, square1.rectsizeY);
    }

  } // Close mouseIsPressed


  //  CIRCLE 3

  let distanciaCirculo3 = dist(mouseX, mouseY, circulo3.posicionX, circulo3.posicionY);

  fill(47, 79, 79);
  circle(circulo3.posicionX, circulo3.posicionY, diametro);


  if (mouseIsPressed) {
    if (distanciaCirculo3 < diametro / 2) {

      //Shadow of the circle
      fill(105, 105, 105, 100);
      circle(circulo3.posicionX, circulo3.posicionY, diametro + 15);

      //change of color when circle pressed

      fill(240, 128, 128);
      circle(width * 0.83, height * 0.25, diametro);

      rect(square1.rectanguloX += 2, square1.rectanguloY, square1.rectsizeX,
        square1.rectsizeY);
    }

  } //Close mouseIsPressed

}
