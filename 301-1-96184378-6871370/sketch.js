/*
The case of the Python Syndicate
Stage 2


Officer: 6871370
CaseNum: 301-1-96184378-6871370

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Pawel Karpinski

- The variables for Pawel Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Pawel Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Pawel Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Pawel Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var bones_karpinski_image;
var countess_hamilton_image;
var pawel_karpinski_image;
var cecil_karpinski_image;
var rocky_kray_image;
var robbie_kray_image;


var pawel_karpinski_x_coordinate = 701;
var pawel_karpinski_y_coordinate = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_image = loadImage("karpinskiDog.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	robbie_kray_image = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_image, pawel_karpinski_x_coordinate, pawel_karpinski_y_coordinate);

	image(bones_karpinski_image, pawel_karpinski_x_coordinate-586, pawel_karpinski_y_coordinate);
	image(countess_hamilton_image, pawel_karpinski_x_coordinate-293, pawel_karpinski_y_coordinate);
	image(cecil_karpinski_image, pawel_karpinski_x_coordinate-586, pawel_karpinski_y_coordinate+269);
	image(rocky_kray_image, pawel_karpinski_x_coordinate-293, pawel_karpinski_y_coordinate+269);
	image(robbie_kray_image, pawel_karpinski_x_coordinate, pawel_karpinski_y_coordinate+269);

}