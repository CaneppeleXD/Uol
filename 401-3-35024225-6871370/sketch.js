/*

Officer: 6871370
CaseNum: 401-3-35024225-6871370

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If strychnine dips below 0.69, mercury goes above 0.54, and also amanita_mushrooms goes above 0.74, try decreasing insulin by 0.04
	- When methanol goes above 0.57, whilst at the same time, Nerve_Gas goes above 0.34 or cyanide goes above 0.41, increase insulin by 0.04
	- If amanita_mushrooms dips below 0.38 or Nerve_Gas goes above 0.37, whilst at the same time, cyanide goes above 0.59 and methanol goes above 0.68, decrement Beta_Blocker by 0.04
	- If mercury goes above 0.67, spiderVenom goes above 0.41, strychnine dips below 0.39, and also warfarin goes above 0.75, increase Beta_Blocker by 0.01
	- When warfarin dips below 0.34 and strychnine dips below 0.27, whilst at the same time, spiderVenom dips below 0.52 or cyanide dips below 0.71, reduce charcoal by 0.02
	- If either mercury dips below 0.36, methanol dips below 0.45, or perhaps Nerve_Gas goes above 0.64, increase charcoal by 0.05
	- When mercury goes above 0.28 or methanol dips below 0.57, whilst at the same time, spiderVenom dips below 0.54 and amanita_mushrooms dips below 0.41, try decreasing plasma by 0.03
	- When strychnine dips below 0.72 or Nerve_Gas dips below 0.72, or on the other hand, warfarin goes above 0.6 and cyanide dips below 0.73, increase plasma by 0.03
	- If methanol goes above 0.49, mercury dips below 0.47, and also strychnine dips below 0.63, decrement SodiumBicarbonate by 0.04
	- When amanita_mushrooms goes above 0.38, Nerve_Gas goes above 0.74, and also warfarin goes above 0.4, increase SodiumBicarbonate by 0.03


Your conditional statements should consider the following poisons:

	- strychnine
	- spiderVenom
	- methanol
	- Nerve_Gas
	- amanita_mushrooms
	- mercury
	- warfarin
	- cyanide


Your conditional statements should modify the following antidotes:

	- insulin
	- Beta_Blocker
	- charcoal
	- plasma
	- SodiumBicarbonate


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
var spiderVenom;
var methanol;
var Nerve_Gas;
var amanita_mushrooms;
var mercury;
var warfarin;
var cyanide;


//Declare the antidote variables
var insulin;
var Beta_Blocker;
var charcoal;
var plasma;
var SodiumBicarbonate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	strychnine = 0.5;
	spiderVenom = 0.5;
	methanol = 0.5;
	Nerve_Gas = 0.5;
	amanita_mushrooms = 0.5;
	mercury = 0.5;
	warfarin = 0.5;
	cyanide = 0.5;
	insulin = 0.5;
	Beta_Blocker = 0.5;
	charcoal = 0.5;
	plasma = 0.5;
	SodiumBicarbonate = 0.5;


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
	// - If strychnine dips below 0.69, mercury goes above 0.54, and also amanita_mushrooms goes above 0.74, try decreasing insulin by 0.04
	// - When methanol goes above 0.57, whilst at the same time, Nerve_Gas goes above 0.34 or cyanide goes above 0.41, increase insulin by 0.04
	// - If amanita_mushrooms dips below 0.38 or Nerve_Gas goes above 0.37, whilst at the same time, cyanide goes above 0.59 and methanol goes above 0.68, decrement Beta_Blocker by 0.04
	// - If mercury goes above 0.67, spiderVenom goes above 0.41, strychnine dips below 0.39, and also warfarin goes above 0.75, increase Beta_Blocker by 0.01
	// - When warfarin dips below 0.34 and strychnine dips below 0.27, whilst at the same time, spiderVenom dips below 0.52 or cyanide dips below 0.71, reduce charcoal by 0.02
	// - If either mercury dips below 0.36, methanol dips below 0.45, or perhaps Nerve_Gas goes above 0.64, increase charcoal by 0.05
	// - When mercury goes above 0.28 or methanol dips below 0.57, whilst at the same time, spiderVenom dips below 0.54 and amanita_mushrooms dips below 0.41, try decreasing plasma by 0.03
	// - When strychnine dips below 0.72 or Nerve_Gas dips below 0.72, or on the other hand, warfarin goes above 0.6 and cyanide dips below 0.73, increase plasma by 0.03
	// - If methanol goes above 0.49, mercury dips below 0.47, and also strychnine dips below 0.63, decrement SodiumBicarbonate by 0.04
	// - When amanita_mushrooms goes above 0.38, Nerve_Gas goes above 0.74, and also warfarin goes above 0.4, increase SodiumBicarbonate by 0.03
	if(strychnine<0.69 && mercury>0.54 && amanita_mushrooms>0.74){insulin-=0.04}
	if(methanol>0.57 && (Nerve_Gas>0.34 || cyanide>0.41)){insulin+=0.04}
	if((amanita_mushrooms<0.38 || Nerve_Gas>0.37) && (cyanide>0.59 && methanol>0.68)){Beta_Blocker-=0.04}
	if(mercury>0.67 && spiderVenom>0.41 && strychnine<0.39 && warfarin>0.75){Beta_Blocker+=0.01}
	if(warfarin<0.34 && strychnine<0.27 && (spiderVenom<0.52 || cyanide<0.71)){charcoal-=0.02}
	if(mercury<0.36 || methanol<0.45 || Nerve_Gas>0.64){charcoal+=0.05}
	if(mercury>0.28 || methanol<0.57 && (spiderVenom<0.54 && amanita_mushrooms<0.41)){plasma-=0.03}
	if(strychnine<0.72 || Nerve_Gas<0.72 || (warfarin>0.6 && cyanide<0.73)){plasma+=0.03}
	if(methanol>0.49 && mercury<0.47 && strychnine<0.63){SodiumBicarbonate-=0.04}
	if(amanita_mushrooms>0.38 && Nerve_Gas>0.74 && warfarin>0.4){SodiumBicarbonate+=0.03}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	strychnine = nextValue(graphs[0],strychnine);
	spiderVenom = nextValue(graphs[1],spiderVenom);
	methanol = nextValue(graphs[2],methanol);
	Nerve_Gas = nextValue(graphs[3],Nerve_Gas);
	amanita_mushrooms = nextValue(graphs[4],amanita_mushrooms);
	mercury = nextValue(graphs[5],mercury);
	warfarin = nextValue(graphs[6],warfarin);
	cyanide = nextValue(graphs[7],cyanide);


	insulin = constrain(insulin, 0, 1);
	Beta_Blocker = constrain(Beta_Blocker, 0, 1);
	charcoal = constrain(charcoal, 0, 1);
	plasma = constrain(plasma, 0, 1);
	SodiumBicarbonate = constrain(SodiumBicarbonate, 0, 1);


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
	text('strychnine: ' + nf(strychnine,1,2), 20,20);
	fill(colors[1]);
	text('spiderVenom: ' + nf(spiderVenom,1,2), 20,40);
	fill(colors[2]);
	text('methanol: ' + nf(methanol,1,2), 20,60);
	fill(colors[3]);
	text('Nerve_Gas: ' + nf(Nerve_Gas,1,2), 20,80);
	fill(colors[4]);
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,100);
	fill(colors[5]);
	text('mercury: ' + nf(mercury,1,2), 20,120);
	fill(colors[6]);
	text('warfarin: ' + nf(warfarin,1,2), 20,140);
	fill(colors[7]);
	text('cyanide: ' + nf(cyanide,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(insulin,50,'insulin');
	drawBar(Beta_Blocker,200,'Beta_Blocker');
	drawBar(charcoal,350,'charcoal');
	drawBar(plasma,500,'plasma');
	drawBar(SodiumBicarbonate,650,'SodiumBicarbonate');


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
