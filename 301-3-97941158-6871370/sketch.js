/*
The case of the Python Syndicate
Stage 4

Officer: 6871370
CaseNum: 301-3-97941158-6871370

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var bonesKarpinskiImg;
var countessHamiltonImg;
var pawelKarpinskiImg;
var annaKarpinskiImg;
var robbieKrayImg;
var adaLovelaceImg;


//declare your new objects below
var annaKarpinskiObj;
var bonesKarpinskiObj;
var countessHamiltonObj;
var pawelKarpinskiObj;
var robbieKrayObj;
var adaLovelaceObj;

var bonesKarpinskiXPosition = 115;
var bonesKarpinskiYPosition = 40;
var countessHamiltonXPosition = 408;
var countessHamiltonYPosition = 40;
var pawelKarpinskiXPosition = 701;
var pawelKarpinskiYPosition = 40;
var robbieKrayXPosition = 408;
var robbieKrayYPosition = 309;
var adaLovelaceXPosition = 701;
var adaLovelaceYPosition = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	adaLovelaceImg = loadImage("ada.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	annaKarpinskiObj = {
		x: 115,
		y: 309,
		image: annaKarpinskiImg
	};
	

	//define your new objects below
	bonesKarpinskiObj = {
		x: 115,
		y: 40,
		image: bonesKarpinskiImg
	};
	countessHamiltonObj = {
		x: 408,
		y: 40,
		image: countessHamiltonImg
	};
	pawelKarpinskiObj = {
		x: 701,
		y: 40,
		image: pawelKarpinskiImg
	};
	robbieKrayObj = {
		x: 408,
		y: 309,
		image: robbieKrayImg
	};
	adaLovelaceObj = {
		x: 701,
		y: 309,
		image: adaLovelaceImg
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiObj.image, bonesKarpinskiObj.x, bonesKarpinskiObj.y);
	image(countessHamiltonObj.image, countessHamiltonObj.x, countessHamiltonObj.y);
	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	image(annaKarpinskiObj.image, annaKarpinskiObj.x, annaKarpinskiObj.y);
	image(robbieKrayObj.image, robbieKrayObj.x, robbieKrayObj.y);
	image(adaLovelaceObj.image, adaLovelaceObj.x, adaLovelaceObj.y);


}