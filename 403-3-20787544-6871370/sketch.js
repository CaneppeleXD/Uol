/*

Officer: 6871370
CaseNum: 403-3-20787544-6871370

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Meyers Way.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 331 meters from Norbert's Begel Emporium then alert local police by drawing a OliveDrab circle around it with a radius of 331 pixels.
- if Shiffman is in Central Station then the neighbourhood watch must be notified by drawing a MediumSpringGreen rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a DeepSkyBlue rectangle covering the area between Gates Avenue, Turing Place, Meyers Way and Romero Avenue.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...

    if(dist(mouseX,mouseY,1175,840)<331){
      fill(107, 142, 35);
      stroke(107, 142, 35);
      ellipse(1175,840,662);
    }
    else if(mouseX>515 && mouseY>720 && mouseX<675 && mouseY<830){
      fill(0, 250, 154);
      stroke(0, 250, 154);
      rect(515,720,160,110); 
    }
    else{
      fill(0, 191, 255);
      stroke(0, 191, 255);
      rect(722,925,358,290)
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);


    // a helpful mouse coordinate pointer
    fill(255,0,0);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}

