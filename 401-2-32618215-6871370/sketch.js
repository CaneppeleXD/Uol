/*

Officer: 6871370
CaseNum: 401-2-32618215-6871370

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When either cyanide dips below 0.42, chlorine dips below 0.75, or perhaps strychnine dips below 0.27, decrease antivenom by 0.01
	- If lead goes above 0.71, AmanitaMushrooms goes above 0.67, and also methanol goes above 0.37, try increasing antivenom by 0.04
	- If either chlorine dips below 0.44, AmanitaMushrooms dips below 0.46, or perhaps cyanide dips below 0.67, decrease hydrochloricAcid by 0.04
	- When strychnine dips below 0.4 and methanol goes above 0.6, increment hydrochloricAcid by 0.04
	- If strychnine goes above 0.28 and methanol dips below 0.75, decrease antibodies by 0.01
	- When chlorine dips below 0.68 or AmanitaMushrooms dips below 0.37, increase antibodies by 0.04
	- When strychnine goes above 0.33, cyanide goes above 0.4, and also AmanitaMushrooms goes above 0.25, try decreasing antitoxin by 0.05
	- If methanol dips below 0.66 or chlorine goes above 0.55, raise antitoxin by 0.02


Your conditional statements should consider the following poisons:

	- strychnine
	- AmanitaMushrooms
	- chlorine
	- methanol
	- cyanide
	- lead


Your conditional statements should modify the following antidotes:

	- antivenom
	- hydrochloricAcid
	- antibodies
	- antitoxin


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var strychnine;
var AmanitaMushrooms;
var chlorine;
var methanol;
var cyanide;
var lead;


//Declare the antidote variables
var antivenom;
var hydrochloricAcid;
var antibodies;
var antitoxin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	strychnine = 0.5;
	AmanitaMushrooms = 0.5;
	chlorine = 0.5;
	methanol = 0.5;
	cyanide = 0.5;
	lead = 0.5;
	antivenom = 0.5;
	hydrochloricAcid = 0.5;
	antibodies = 0.5;
	antitoxin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	// - When either cyanide dips below 0.42, chlorine dips below 0.75, or perhaps strychnine dips below 0.27, decrease antivenom by 0.01
	// - If lead goes above 0.71, AmanitaMushrooms goes above 0.67, and also methanol goes above 0.37, try increasing antivenom by 0.04
	// - If either chlorine dips below 0.44, AmanitaMushrooms dips below 0.46, or perhaps cyanide dips below 0.67, decrease hydrochloricAcid by 0.04
	// - When strychnine dips below 0.4 and methanol goes above 0.6, increment hydrochloricAcid by 0.04
	// - If strychnine goes above 0.28 and methanol dips below 0.75, decrease antibodies by 0.01
	// - When chlorine dips below 0.68 or AmanitaMushrooms dips below 0.37, increase antibodies by 0.04
	// - When strychnine goes above 0.33, cyanide goes above 0.4, and also AmanitaMushrooms goes above 0.25, try decreasing antitoxin by 0.05
	// - If methanol dips below 0.66 or chlorine goes above 0.55, raise antitoxin by 0.02
	if(cyanide<0.42 || chlorine<0.75 || strychnine<0.27){antivenom-=0.01}
	if(lead>0.71 && AmanitaMushrooms>0.67 && methanol>0.37){antivenom+=0.04}
	if(chlorine<0.44 || AmanitaMushrooms<0.46 || cyanide<0.67){hydrochloricAcid-=0.04}
	if(strychnine<0.4 && methanol>0.6){hydrochloricAcid+=0.04}
	if(strychnine>0.28 && methanol<0.75){antibodies-=0.01}
	if(chlorine<0.68 || AmanitaMushrooms<0.37){antibodies+=0.04}
	if(strychnine>0.33 && cyanide>0.4 && AmanitaMushrooms>0.25){antitoxin-=0.05}
	if(methanol<0.66 || chlorine>0.55){antitoxin+=0.02}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	strychnine = nextValue(graphs[0],strychnine);
	AmanitaMushrooms = nextValue(graphs[1],AmanitaMushrooms);
	chlorine = nextValue(graphs[2],chlorine);
	methanol = nextValue(graphs[3],methanol);
	cyanide = nextValue(graphs[4],cyanide);
	lead = nextValue(graphs[5],lead);


	antivenom = constrain(antivenom, 0, 1);
	hydrochloricAcid = constrain(hydrochloricAcid, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('strychnine: ' + nf(strychnine,1,2), 20,20);
	fill(colors[1]);
	text('AmanitaMushrooms: ' + nf(AmanitaMushrooms,1,2), 20,40);
	fill(colors[2]);
	text('chlorine: ' + nf(chlorine,1,2), 20,60);
	fill(colors[3]);
	text('methanol: ' + nf(methanol,1,2), 20,80);
	fill(colors[4]);
	text('cyanide: ' + nf(cyanide,1,2), 20,100);
	fill(colors[5]);
	text('lead: ' + nf(lead,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(antivenom,50,'antivenom');
	drawBar(hydrochloricAcid,200,'hydrochloricAcid');
	drawBar(antibodies,350,'antibodies');
	drawBar(antitoxin,500,'antitoxin');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
