/*

Officer: 6871370
CaseNum: 502-3-81253419-6871370

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var AExcerpt = [
{
	bit0: ["donation", "smile", "succeed", "Governor Zuckerberg"], 
	bit1: ["rejoice", "stuff", "rejoice", "sneeze"], 
	bit2: ["ALGOL", "start", "charge", "start"]
},
{
	bit0: ["sail", "clip", "rejoice", "stuff"], 
	bit1: ["plug", "protect", "sneeze", "hurry"], 
	bit2: ["sneeze", "succeed", "stuff", "$200,000"]
},
{
	bit0: ["bake", "tug", "stuff", "bake"], 
	bit1: ["consider", "hurry", "mend", "protect"], 
	bit2: ["COBOL", "tug", "hurry", "radiate"]
},
{
	bit0: ["meddle", "start", "fence", "meddle"], 
	bit1: ["smile", "succeed", "tug", "syndicate"], 
	bit2: ["sneeze", "succeed", "succeed", "charge"]
},
{
	bit0: ["charge", "mend", "play", "sneeze"], 
	bit1: ["fence", "radiate", "fence", "mend"], 
	bit2: ["charge", "play", "protect", "smile"]
}];

var BExcerpt = [
{
	bit0: ["Edsger", "consider", "succeed", "rejoice"], 
	bit1: ["sneeze", "hurry", "succeed", "radiate"], 
	bit2: ["mend", "radiate", "charge", "radiate"]
},
{
	bit0: ["play", "smile", "stuff", "you"], 
	bit1: ["play", "radiate", "play", "radiate"], 
	bit2: ["tug", "bake", "bake", "hurry"]
},
{
	bit0: ["sail", "start", "tug", "bake"], 
	bit1: ["tug", "tug", "fence", "consider"], 
	bit2: ["play", "radiate", "rejoice", "succeed"]
},
{
	bit0: ["stuff", "charge", "meddle", "radiate"], 
	bit1: ["tug", "mend", "plug", "start"], 
	bit2: ["tug", "mend", "protect", "tug"]
},
{
	bit0: ["rejoice", "rejoice", "development", "clip"], 
	bit1: ["ALGOL fish wholesalers", "rejoice", "fence", "stuff"], 
	bit2: ["plug", "start", "meddle", "sneeze"]
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest "+BExcerpt[0].bit0[0]+", I have just received your very generous "+AExcerpt[0].bit0[0]+" of "+AExcerpt[1].bit2[3]+". Thank you. This will be invaluable to our campaign. "+AExcerpt[0].bit2[0]+" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+BExcerpt[1].bit0[3]+" or "+BExcerpt[4].bit1[0]+" to the "+AExcerpt[3].bit1[3]+". Your new "+BExcerpt[4].bit0[2]+" at the "+AExcerpt[2].bit2[0]+" can now proceed without impediment. Yours sincerely, "+AExcerpt[0].bit0[3];

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
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
