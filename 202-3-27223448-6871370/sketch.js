/*

Officer: 6871370
CaseNum: 202-3-27223448-6871370

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Midnight Blue filled text with a Yellow outline in Diggity font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(663,655);
	textSize(37);
}

function draw()
{
	background(255);

	fill(220,20,60);
	stroke(153,50,204);
	textFont(Ballpointprint);
	// text("ays.", 519,111);
	fill(25,25,112);
	stroke(0,0,139);
	// text("not", 246,329);
	push();
	fill(139,0,139);
	stroke(153,50,204);
	textFont(RonsFont);
	// text("the", 321,374);
	pop();
	stroke(184,134,11);
	textFont(Diggity);
	// text("more", 509,329);
	fill(32,178,170);
	stroke(0,0,139);
	textFont(Ballpointprint);
	// text("sure", 299,329);
	fill(233,150,122);
	stroke(220,20,60);
	textFont(RonsFont);
	// text("away", 17,243);
	fill(100,149,237);
	stroke(255,0,0);
	textFont(Ballpointprint);
	// text("Are", 29,198);
	fill(173,255,47);
	stroke(32,178,170);
	textFont(Melissa);
	// text("?", 125,374);
	fill(160,82,45);
	textFont(Diggity);
	//text("The", 146,374);
	fill(152,251,152);
	stroke(0,139,139);
	//text("Are", 585,111);
	fill(139,69,19);
	stroke(32,178,170);
	textFont(Melissa);
	//text("continual", 381,111);
	fill(240,230,140);
	stroke(0,0,205);
	//text("sort", 361,243);
	fill(0,100,0);
	stroke(139,69,19);
	textFont(RonsFont);
	//text("this", 416,243);
	fill(218,112,214);
	stroke(255,69,0);
	textFont(Diggity);
	//text("I", 9,111);
	push();
	fill(240,128,128);
	stroke(154,205,50);
	textFont(Melissa);
	//text("me", 287,198);
	pop();
	fill(244,164,96);
	textFont(Melissa);
	//text("Bob,", 149,37);
	fill(34,139,34);
	stroke(255,0,255);
	textFont(Ballpointprint);
	//text("a", 158,243);
	fill(173,216,230);
	stroke(154,205,50);
	textFont(Melissa);
	//text("?", 249,283);
	fill(0,0,255);
	stroke(107,142,35);
	//text("Is", 568,243);
	push();
	fill(255,105,180);
	stroke(218,165,32);
	//text("If", 308,152);
	pop();
	stroke(148,0,211);
	textFont(Diggity);
	//text("are", 327,283);
	fill(220,20,60);
	stroke(199,21,133);
	textFont(Ballpointprint);
	//text("Perhaps", 353,198);
	fill(50,205,50);
	stroke(255,0,255);
	textFont(Melissa);
	//text("Daisy", 20,522);
	fill(0,255,255);
	stroke(255,215,0);
	textFont(Ballpointprint);
	//text("sometimes.", 27,329);
	push();
	fill(34,139,34);
	stroke(34,139,34);
	textFont(Melissa);
	//text("can", 9,374);
	pop();
	fill(255,0,0);
	stroke(0,0,128);
	textFont(RonsFont);
	//text("and", 288,243);
	fill(255,0,255);
	stroke(50,205,50);
	textFont(Melissa);
	//text("so", 385,283);
	fill(160,82,45);
	stroke(0,250,154);
	//text("we", 474,198);
	fill(0,128,0);
	stroke(75,0,130);
	textFont(Ballpointprint);
	//text("yours,", 138,448);
	fill(238,130,238);
	stroke(128,0,128);
	textFont(RonsFont);
	//text("break", 191,243);
	fill(255,127,80);
	stroke(32,178,170);
	textFont(Ballpointprint);
	//text("out.", 511,243);
	fill(123,104,238);
	stroke(0,0,255);
	//text("relationship", 20,283);
	stroke(210,105,30);
	//text("secrets,", 206,374);
	fill(255,105,180);
	stroke(128,0,0);
	textFont(RonsFont);
	//text("longer", 131,111);
	push();
	fill(64,224,208);
	textFont(Diggity);
	//text("You", 270,283);
	pop();
	stroke(255,165,0);
	//text("guarded", 419,283);
	fill(199,21,133);
	stroke(255,215,0);
	textFont(Diggity);
	//text("how", 370,329);
	fill(255,165,0);
	stroke(148,0,211);
	textFont(RonsFont);
	//text("no", 85,111);
	push();
	fill(178,34,34);
	stroke(46,139,87);
	textFont(Ballpointprint);
	//text("Forever", 16,448);
	pop();
	stroke(32,178,170);
	textFont(Ballpointprint);
	//text("I", 584,329);
	fill(154,205,50);
	stroke(160,82,45);
	//text("so,", 339,152);
	fill(255,69,0);
	stroke(0,128,0);
	textFont(Diggity);
	//text("you", 20,152);
	fill(255,105,180);
	stroke(0,250,154);
	textFont(RonsFont);
	//text("can", 418,152);
	fill(205,133,63);
	stroke(34,139,34);
	//text("you", 99,198);
	fill(65,105,225);
	stroke(0,100,0);
	//text("send", 482,152);
	fill(176,224,230);
	stroke(0,255,255);
	textFont(Diggity);
	//text("?", 324,198);
	fill(218,165,32);
	stroke(107,142,35);
	textFont(Ballpointprint);
	//text("cash.", 566,152);
	push();
	fill(138,43,226);
	stroke(220,20,60);
	//text("of", 151,152);
	pop();
	fill(240,128,128);
	stroke(0,128,128);
	textFont(Melissa);
	//text("our", 601,243);
	fill(30,144,255);
	stroke(0,139,139);
	//text("?", 287,152);
	stroke(107,142,35);
	//text("should", 514,198);
	push();
	fill(128,128,0);
	stroke(139,69,19);
	textFont(RonsFont);
	//text("My", 20,37);
	pop();
	fill(250,128,114);
	stroke(0,128,0);
	//text("these", 315,111);
	fill(124,252,0);
	stroke(0,255,255);
	textFont(Ballpointprint);
	//text("short", 74,152);
	push();
	stroke(255,69,0);
	textFont(RonsFont);
	//text("I'm", 178,329);
	pop();
	fill(152,251,152);
	//text("x", 84,522);
	fill(255,0,255);
	stroke(0,255,127);
	textFont(RonsFont);
	//text("I", 386,152);
	fill(220,20,60);
	textFont(Ballpointprint);
	//text("can", 28,111);
	fill(165,42,42);
	stroke(255,165,0);
	textFont(Diggity);
	//text("much", 433,329);
	push();
	fill(255,127,80);
	stroke(46,139,87);
	textFont(Ballpointprint);
	//text("del", 476,111);
	pop();
	fill(199,21,133);
	stroke(255,140,0);
	//text("take", 53,374);
	push();
	fill(152,251,152);
	stroke(46,139,87);
	textFont(RonsFont);
	//text("avoiding", 163,198);
	pop();
	fill(0,0,128);
	stroke(46,139,87);
	textFont(Melissa);
	//text("darling", 75,37);
	push();
	fill(128,128,0);
	stroke(153,50,204);
	textFont(Diggity);
	//text("silence.", 380,374);
	pop();
	fill(25,25,112);
	stroke(255,255,0);
	textFont(Diggity);
	text("for", 103,243);
	fill(238,232,170);
	stroke(218,165,32);
	textFont(Melissa);
	// text("all", 482,243);
	fill(25,25,112);
	stroke(255,255,0);
	textFont(Diggity);
	text("safe", 178,283);
	text("ignore", 233,111);
	text("go", 584,198);
	text("money", 201,152);



}
