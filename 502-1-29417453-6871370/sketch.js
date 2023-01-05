/*

Officer: 6871370
CaseNum: 502-1-29417453-6871370

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var document_A = [
	{part_0: "plug", part_1: "sail", part_2: "fence"}, 
	{part_0: "hurry", part_1: "she has", part_2: "plug"}, 
	{part_0: "sail", part_1: "start", part_2: "syndicate"}, 
	{part_0: "plug", part_1: "meddle", part_2: "radiate"}, 
	{part_0: "fence", part_1: "clip", part_2: "a donation"}, 
	{part_0: "bake", part_1: "charge", part_2: "stuff"}, 
	{part_0: "COBOL", part_1: "hurry", part_2: "clip"}, 
	{part_0: "hurry", part_1: "rejoice", part_2: "succeed"}, 
	{part_0: "mend", part_1: "sail", part_2: "capital"}, 
	{part_0: "tug", part_1: "stuff", part_2: "Edsger"}
];

var document_B = [
	{part_0: "mend", part_1: "stuff", part_2: "sneeze"}, 
	{part_0: "sneeze", part_1: "sail", part_2: "play"}, 
	{part_0: "Governor Zuckerberg", part_1: "mend", part_2: "protect"}, 
	{part_0: "consider", part_1: "meddle", part_2: "mend"}, 
	{part_0: "delicate", part_1: "meddle", part_2: "charge"}, 
	{part_0: "start", part_1: "sneeze", part_2: "mend"}, 
	{part_0: "romantic", part_1: "hurry", part_2: "smile"}, 
	{part_0: "fence", part_1: "meddle", part_2: "play"}, 
	{part_0: "tug", part_1: "stuff", part_2: "mend"}, 
	{part_0: "protect", part_1: "Hopper’s", part_2: "rejoice"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest "+document_A[9].part_2+", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about "+document_B[9].part_1+" intervention. I suspect that "+document_A[1].part_1+" a "+document_B[6].part_0+" interest at the "+document_A[6].part_0+". I and the "+document_A[2].part_2+" appreciate your many contributions over the years. However, this is a most "+document_B[4].part_0+" matter which would require significant "+document_A[8].part_2+" for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps "+document_A[4].part_2+" to my forthcoming campaign would help. Yours sincerely, "+document_B[2].part_0;

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
