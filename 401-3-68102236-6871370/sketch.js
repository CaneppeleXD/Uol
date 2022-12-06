/*

Officer: 6871370
CaseNum: 401-3-68102236-6871370

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When lead dips below 0.58 and methanol dips below 0.37, or on the other hand, formaldehyde dips below 0.51 and cyanide dips below 0.51, try decreasing Hydrochloric_Acid by 0.02
	- When strychnine dips below 0.47 and mercury goes above 0.54, or on the other hand, botulinium dips below 0.44 or hemlock dips below 0.68, increment Hydrochloric_Acid by 0.03
	- When mercury goes above 0.34 and strychnine goes above 0.67, or on the other hand, formaldehyde goes above 0.54 or methanol goes above 0.26, try decreasing aspirin by 0.04
	- When botulinium dips below 0.58 or cyanide dips below 0.66, or on the other hand, lead goes above 0.6 and hemlock dips below 0.48, increase aspirin by 0.02
	- When strychnine goes above 0.59 or mercury dips below 0.26, whilst at the same time, cyanide dips below 0.27 or hemlock goes above 0.43, decrement insulin by 0.05
	- If methanol dips below 0.65 and lead goes above 0.65, whilst at the same time, botulinium dips below 0.57 or formaldehyde dips below 0.73, increment insulin by 0.05
	- When either methanol goes above 0.54, formaldehyde goes above 0.68, or perhaps botulinium dips below 0.68, reduce plasma by 0.04
	- When either cyanide dips below 0.75, lead dips below 0.43, or perhaps mercury goes above 0.75, increment plasma by 0.02
	- If either hemlock dips below 0.48, lead dips below 0.39, or perhaps methanol goes above 0.72, decrement chalk by 0.01
	- When either cyanide goes above 0.72, formaldehyde dips below 0.71, or perhaps mercury dips below 0.49, try increasing chalk by 0.04


Your conditional statements should:

consider the following poisons:

	- botulinium
	- cyanide
	- lead
	- methanol
	- strychnine
	- formaldehyde
	- mercury
	- hemlock


and modify the following antidotes:

	- Hydrochloric_Acid
	- aspirin
	- insulin
	- plasma
	- chalk


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var botulinium;
var cyanide;
var lead;
var methanol;
var strychnine;
var formaldehyde;
var mercury;
var hemlock;


//Declare the antidote variables
var Hydrochloric_Acid;
var aspirin;
var insulin;
var plasma;
var chalk;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	botulinium = 0.5;
	cyanide = 0.5;
	lead = 0.5;
	methanol = 0.5;
	strychnine = 0.5;
	formaldehyde = 0.5;
	mercury = 0.5;
	hemlock = 0.5;
	Hydrochloric_Acid = 0.5;
	aspirin = 0.5;
	insulin = 0.5;
	plasma = 0.5;
	chalk = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
	// x- When lead dips below 0.58 and methanol dips below 0.37, or on the other hand, formaldehyde dips below 0.51 and cyanide dips below 0.51, try decreasing Hydrochloric_Acid by 0.02
	// x- When strychnine dips below 0.47 and mercury goes above 0.54, or on the other hand, botulinium dips below 0.44 or hemlock dips below 0.68, increment Hydrochloric_Acid by 0.03
	// x- When mercury goes above 0.34 and strychnine goes above 0.67, or on the other hand, formaldehyde goes above 0.54 or methanol goes above 0.26, try decreasing aspirin by 0.04
	// x- When botulinium dips below 0.58 or cyanide dips below 0.66, or on the other hand, lead goes above 0.6 and hemlock dips below 0.48, increase aspirin by 0.02
	// x- When strychnine goes above 0.59 or mercury dips below 0.26, whilst at the same time, cyanide dips below 0.27 or hemlock goes above 0.43, decrement insulin by 0.05
	// x- If methanol dips below 0.65 and lead goes above 0.65, whilst at the same time, botulinium dips below 0.57 or formaldehyde dips below 0.73, increment insulin by 0.05
	// x- When either methanol goes above 0.54, formaldehyde goes above 0.68, or perhaps botulinium dips below 0.68, reduce plasma by 0.04
	// x- When either cyanide dips below 0.75, lead dips below 0.43, or perhaps mercury goes above 0.75, increment plasma by 0.02
	// - If either hemlock dips below 0.48, lead dips below 0.39, or perhaps methanol goes above 0.72, decrement chalk by 0.01
	// - When either cyanide goes above 0.72, formaldehyde dips below 0.71, or perhaps mercury dips below 0.49, try increasing chalk by 0.04
	if((lead<0.58 && methanol<0.37) || (formaldehyde<0.51 && cyanide<0.51)){Hydrochloric_Acid-=0.02}
	if((strychnine<0.47 && mercury>0.54) || botulinium<0.44 || hemlock<0.68){Hydrochloric_Acid+=0.03}
	if((mercury>0.34 && strychnine>0.67) || formaldehyde>0.54 || methanol>0.26){aspirin-=0.04}
	if(botulinium<0.58 || cyanide<0.66 || (lead>0.6 && hemlock<0.48)){aspirin+=0.02}
	if((strychnine>0.59 || mercury<0.26) && (cyanide<0.27 || hemlock>0.43)){insulin-=0.05}
	if(methanol<0.65 && lead>0.65 && (botulinium<0.57 || formaldehyde<0.73)){insulin+=0.05}
	if(methanol>0.54 || formaldehyde>0.68 || botulinium<0.68){plasma-=0.04}
	if(cyanide<0.75 || lead<0.43 || mercury>0.75){plasma+=0.02}
	if(hemlock<0.48 || lead<0.39 || methanol>0.72){chalk-=0.01}
	if(cyanide>0.72 || formaldehyde<0.71 || mercury<0.49){chalk+=0.04}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	botulinium = nextValue(graphs[0],botulinium);
	cyanide = nextValue(graphs[1],cyanide);
	lead = nextValue(graphs[2],lead);
	methanol = nextValue(graphs[3],methanol);
	strychnine = nextValue(graphs[4],strychnine);
	formaldehyde = nextValue(graphs[5],formaldehyde);
	mercury = nextValue(graphs[6],mercury);
	hemlock = nextValue(graphs[7],hemlock);


	Hydrochloric_Acid = constrain(Hydrochloric_Acid, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	insulin = constrain(insulin, 0, 1);
	plasma = constrain(plasma, 0, 1);
	chalk = constrain(chalk, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('botulinium: ' + nf(botulinium,1,2), 20,20);
	fill(colors[1]);
	text('cyanide: ' + nf(cyanide,1,2), 20,40);
	fill(colors[2]);
	text('lead: ' + nf(lead,1,2), 20,60);
	fill(colors[3]);
	text('methanol: ' + nf(methanol,1,2), 20,80);
	fill(colors[4]);
	text('strychnine: ' + nf(strychnine,1,2), 20,100);
	fill(colors[5]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,120);
	fill(colors[6]);
	text('mercury: ' + nf(mercury,1,2), 20,140);
	fill(colors[7]);
	text('hemlock: ' + nf(hemlock,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(Hydrochloric_Acid,50,'Hydrochloric_Acid');
	drawBar(aspirin,200,'aspirin');
	drawBar(insulin,350,'insulin');
	drawBar(plasma,500,'plasma');
	drawBar(chalk,650,'chalk');


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
