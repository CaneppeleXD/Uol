/*

Officer: 6871370
CaseNum: 303-2-97863672-6871370

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Make cryptic_box_key_0 equal to the value of mouseX
	- Use the 'min' function to prevent cryptic_box_key_0 from going above 19

	When the mouse button is released:
	- Increment cryptic_box_key_1 by 3
	- Use the 'constrain' function to prevent cryptic_box_key_1 from falling below 5 and going above 18

	When the mouse button is pressed:
	- Make cryptic_box_key_2 equal to the value of mouseX
	- Use the 'min' function to prevent cryptic_box_key_2 from going above 10

	When any key is released:
	- Decrement cryptic_box_key_3 by 2
	- Use the 'constrain' function to prevent cryptic_box_key_3 from falling below 4 and going above 15

	Whilst the mouse is being dragged:
	- Make cryptic_box_key_4 equal to the value of mouseX
	- Use the 'constrain' function to prevent cryptic_box_key_4 from falling below 20 and going above 80



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var cryptic_box_key_0;
var cryptic_box_key_1;
var cryptic_box_key_2;
var cryptic_box_key_3;
var cryptic_box_key_4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	cryptic_box_key_0 = 0;
	cryptic_box_key_1 = 0;
	cryptic_box_key_2 = 0;
	cryptic_box_key_3 = 0;
	cryptic_box_key_4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseMoved(){
	cryptic_box_key_0=min(19,mouseX);
}

function mouseReleased(){
	cryptic_box_key_1=constrain(cryptic_box_key_1+3,5,18);
}

function mousePressed(){
	cryptic_box_key_2=min(mouseX,10);
}

function keyReleased(){
	cryptic_box_key_3=constrain(cryptic_box_key_3-2,4,15);
}

function mouseDragged(){
	cryptic_box_key_4=constrain(mouseX,20,80);
}
///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,cryptic_box_key_0, 25);
	pop();

	push();
	translate(120,380);
	drawDial(140,cryptic_box_key_1, 26);
	pop();

	push();
	translate(280,170);
	drawDial(140,cryptic_box_key_2, 15);
	pop();

	push();
	translate(280,380);
	drawDial(140,cryptic_box_key_3, 20);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(cryptic_box_key_4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
