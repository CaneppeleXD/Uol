/*
The case of the Python Syndicate
Stage 1

Officer: 6871370
CaseNum: 301-0-22390529-6871370

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var pawel_karpinski_img;
var bones_karpinski_img;
var robbie_kray_img;
var anna_karpinski_img;
var countess_hamilton_img;
var cecil_karpinski_img;



//declare your new variables below
var countess_hamilton_x_coordinate = 408;
var countess_hamilton_y_coordinate = 309;

var pawel_karpinski_x_coordinate = 115;
var pawel_karpinski_y_coordinate = 40;

var bones_karpinski_x_coordinate = 408;
var bones_karpinski_y_coordinate = 40;

var robbie_kray_x_coordinate = 701;
var robbie_kray_y_coordinate = 40;

var anna_karpinski_x_coordinate = 115;
var anna_karpinski_y_coordinate = 309;

var cecil_karpinski_x_coordinate = 701;
var cecil_karpinski_y_coordinate = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(countess_hamilton_img, countess_hamilton_x_coordinate, countess_hamilton_y_coordinate);
	image(pawel_karpinski_img, pawel_karpinski_x_coordinate, pawel_karpinski_y_coordinate);
	image(bones_karpinski_img, bones_karpinski_x_coordinate, bones_karpinski_y_coordinate);
	image(robbie_kray_img, robbie_kray_x_coordinate, robbie_kray_y_coordinate);
	image(anna_karpinski_img, anna_karpinski_x_coordinate, anna_karpinski_y_coordinate);
	image(cecil_karpinski_img, cecil_karpinski_x_coordinate, cecil_karpinski_y_coordinate);

}