//Week 3 Assingment
//Roseton (Rose Window)


//Variables for Geometrics Shapes
var de = {
  circle1Size: 300,
  circle2Size: 75,

  rectSizeX: 100,
  rectSizeY: 150,
  rectPositionX: 05,

  //position in Y in small circles
  s_circle1_PosY: 120,
  s_circle2_PosY: 150,

  lineX: 200,

  Sides: 24,
}

//SLIDERS 1 VARIABLES

let sl_line_1 = {
  point1_X: 75,
  point1_Y: 575,
  point2_X: 225,
  point2_Y: 575,
};

let sl_button_1 = {
  _X: 75,
  _Y: 575,
  _size: 20,
};

//SLIDERS 2 VARIABLES
let sl_line_2 = {
  point1_X: 375,
  point1_Y: 575,
  point2_X: 525,
  point2_Y: 575,
};

let sl_button_2 = {
  _X: 375,
  _Y: 575,
  _size: 20,
};

//-----------

let bigCircleSize = {
  _size: 100,
  _size2: 400,
};
//-----------


function setup() {
  createCanvas(600, 600);

  background(255);

  angleMode(DEGREES)
  rectMode(CENTER)

  //SLIDERS VARIABLES for Colors
  var circleButton = color(255, 20, 147);
  color4 = color(0, 20, 147); //darkBlue


  //------------
}


function draw() {

  background(255);

  de_Shape()

  function de_Shape() {

    noFill()

    //COLORS VARIABLES
    var color0 = color(255, 20, 147); //pink
    var color1 = color(4, 0, 152); //blue
    var color2 = color(0, 250, 154); //green


    push()

    //Moving position 0,0, tipically on the corner, to the center of the screen.
    translate(width / 2, height / 2);

    var angle = 360 / de.Sides;
    for (let i = 0; i < de.Sides; i++) {


      //Lines
      stroke(color2);
      line(0, 0, de.lineX, 0);

      stroke(color1);

      //Rectangles
      rect(de.rectPositionX, 0, de.rectSizeX, de.rectSizeY);

      //Small Circles
      circle(0, de.s_circle1_PosY, 20)
      circle(0, de.s_circle2_PosY, 10);

      rotate(angle)
    }


    //Drawing a Big Circles

    stroke(color0);
    strokeWeight(2);
    ellipse(0, 0, de.circle1Size);
    ellipse(0, 0, de.circle2Size);
    strokeWeight(1);


  }

  pop()


  //FIRST SLIDER

  //Slider Area

  stroke(color4);
  strokeWeight(2);
  line(sl_line_1.point1_X, sl_line_1.point1_Y, sl_line_1.point2_X, sl_line_1.point2_Y);
  strokeWeight(1);

  //Action of Slider
  let dist_circle_1 = dist(mouseX, mouseY, sl_button_1._X, sl_button_1._Y);

  //Update circle color to white
  circleColor = color(255, 255, 255);
  //Update button slider color to pink
  circleButton = color(255, 20, 147);

  //if mouse Is Pressed
  if (mouseIsPressed) {

    //if mouse is in the slider button
    if (dist_circle_1 < sl_button_1._size / 2) {

      // if mouse is in slider area
      if (mouseX > sl_line_1.point1_X && mouseX < sl_line_1.point2_X) {
        sl_button_1._X = mouseX;

        //Update circle color to magenta, if the previous conditions are true, this replace the circle color assigment
        circleButton = color(139, 0, 139);

        //MAPPING

        //Mapping Big circle 1
        de.circle1Size = map(mouseX, sl_line_1.point1_X, sl_line_1.point2_X, sl_button_1._size, 500);

        //Mapping Big circle 2
        de.circle2Size = map(mouseX, sl_line_1.point1_X, sl_line_1.point2_X, 550, sl_button_1._size);

        //Mapping Small circle 1
        de.s_circle1_PosY = map(mouseX, sl_line_1.point1_X, sl_line_1.point2_X, 120, 250);

        //Mapping Small circle 2
        de.s_circle2_PosY = map(mouseX, sl_line_1.point1_X, sl_line_1.point2_X, 300, 100);

        //Mapping rectangles
        de.rectSizeY = map(mouseX, sl_line_1.point1_X, sl_line_1.point2_X, 150, 25);
      }
    }
  }

  // Slider_button
  noStroke();
  fill(circleButton);
  circle(sl_button_1._X, sl_button_1._Y, sl_button_1._size);


  ///----------------------


  //SECOND SLIDER

  //Slider Area

  stroke(color4);
  strokeWeight(2);
  line(sl_line_2.point1_X, sl_line_2.point1_Y, sl_line_2.point2_X, sl_line_2.point2_Y);
  strokeWeight(1);

  //Action of Slider
  let dist_circle_2 = dist(mouseX, mouseY, sl_button_2._X, sl_button_2._Y);

  //Update circle color to white
  circleColor = color(255, 255, 255);
  //Update button slider color to pink
  circleButton = color(255, 20, 147);

  //if mouse Is Pressed
  if (mouseIsPressed) {

    //if mouse is in the slider button
    if (dist_circle_2 < sl_button_2._size / 2) {

      // if mouse is in slider area
      if (mouseX > sl_line_2.point1_X && mouseX < sl_line_2.point2_X) {
        sl_button_2._X = mouseX;

        //Update circle color to magenta, if the previous conditions are true, this replace the circle color assigment
        circleButton = color(139, 0, 139);

       // ---Map() to the Slider Here---


      }
    }

}
    // SECOND Slider_Button
  noStroke();
  fill(circleButton);
  circle(sl_button_2._X, sl_button_2._Y, sl_button_2._size);

}
