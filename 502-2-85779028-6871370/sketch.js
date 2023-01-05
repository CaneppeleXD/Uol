/*

Officer: 6871370
CaseNum: 502-2-85779028-6871370

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var A_document = {
	redacted_0: [ "a donation", "radiate", "succeed"], 
	redacted_1: [ "play", "Governor Zuckerberg", "start"], 
	redacted_2: [ "charge", "radiate", "succeed"], 
	redacted_3: [ "protect", "start", "radiate"], 
	redacted_4: [ "play", "bake", "succeed"], 
	redacted_5: [ "$200,000", "radiate", "start"], 
	redacted_6: [ "meddle", "meddle", "sneeze"], 
	redacted_7: [ "clip", "meddle", "ALGOL"], 
	redacted_8: [ "smile", "clip", "tug"], 
	redacted_9: [ "charge", "start", "protect"]
};

var B_document = {
	redacted_0: [ "fence", "meddle", "hurry"], 
	redacted_1: [ "protect", "protect", "fence"], 
	redacted_2: [ "start", "Edsger", "Hopper"], 
	redacted_3: [ "rejoice", "clip", "plug"], 
	redacted_4: [ "sail", "plug", "consider"], 
	redacted_5: [ "plug", "stuff", "hit"], 
	redacted_6: [ "hurry", "smile", "smile"], 
	redacted_7: [ "syndicate", "consider", "sneeze"], 
	redacted_8: [ "start", "meddle", "sail"], 
	redacted_9: [ "bake", "play", "campaign"]
};

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
  redactedText = "Dear "+A_document.redacted_1[1]+", I am sure that something could be worked out in terms of "+A_document.redacted_0[0]+" for your "+B_document.redacted_9[2]+". How does "+A_document.redacted_5[0]+" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+B_document.redacted_2[2]+" needs to be out of the picture. She’s caused enough trouble. Get the "+B_document.redacted_7[0]+" to organise the "+B_document.redacted_5[2]+" but I’d prefer it you don’t mention me or "+A_document.redacted_7[2]+". I owe them enough favours already. Your old friend, "+B_document.redacted_2[1];

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
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
