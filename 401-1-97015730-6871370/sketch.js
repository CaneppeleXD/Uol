/*

Officer: 6871370
CaseNum: 401-1-97015730-6871370

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- If strychnine dips below 0.68, reduce Calcium_Gluconate by 0.01
	- When hemlock goes above 0.47 or mercury goes above 0.31, increment Calcium_Gluconate by 0.04
	- If hemlock goes above 0.66 and strychnine goes above 0.53, decrement HydrochloricAcid by 0.02
	- When nerve_gas dips below 0.49 and mercury goes above 0.61, try increasing HydrochloricAcid by 0.05
	- If mercury dips below 0.63, decrease plasma by 0.04
	- If hemlock dips below 0.6 or nerve_gas goes above 0.38, try increasing plasma by 0.05
	- When strychnine goes above 0.25, reduce glucagon by 0.03
	- When nerve_gas goes above 0.66 and mercury goes above 0.31, try increasing glucagon by 0.02


Your conditional statements should consider the following poisons:

	- mercury
	- hemlock
	- nerve_gas
	- strychnine


Your conditional statements should modify the following antidotes:

	- Calcium_Gluconate
	- HydrochloricAcid
	- plasma
	- glucagon


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var mercury;
var hemlock;
var nerve_gas;
var strychnine;


//Declare the antidote variables
var Calcium_Gluconate;
var HydrochloricAcid;
var plasma;
var glucagon;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	mercury = 0.5;
	hemlock = 0.5;
	nerve_gas = 0.5;
	strychnine = 0.5;
	Calcium_Gluconate = 0.5;
	HydrochloricAcid = 0.5;
	plasma = 0.5;
	glucagon = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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
	// - If strychnine dips below 0.68, reduce Calcium_Gluconate by 0.01
	// - When hemlock goes above 0.47 or mercury goes above 0.31, increment Calcium_Gluconate by 0.04
	// - If hemlock goes above 0.66 and strychnine goes above 0.53, decrement HydrochloricAcid by 0.02
	// - When nerve_gas dips below 0.49 and mercury goes above 0.61, try increasing HydrochloricAcid by 0.05
	// - If mercury dips below 0.63, decrease plasma by 0.04
	// - If hemlock dips below 0.6 or nerve_gas goes above 0.38, try increasing plasma by 0.05
	// - When strychnine goes above 0.25, reduce glucagon by 0.03
	// - When nerve_gas goes above 0.66 and mercury goes above 0.31, try increasing glucagon by 0.02
	if(strychnine<0.68){Calcium_Gluconate-=0.01}
	if(hemlock>0.47 || mercury>0.31){Calcium_Gluconate+=0.04}
	if(hemlock>0.66 && strychnine>0.53){HydrochloricAcid-=0.02}
	if(nerve_gas<0.49 && mercury>0.61){HydrochloricAcid+=0.05}
	if(mercury<0.63){plasma-=0.04}
	if(hemlock<0.6 || nerve_gas>0.38){plasma+=0.05}
	if(strychnine>0.25){glucagon-=0.03}
	if(nerve_gas>0.66 && mercury>0.31){glucagon+=0.02}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	mercury = nextValue(graphs[0],mercury);
	hemlock = nextValue(graphs[1],hemlock);
	nerve_gas = nextValue(graphs[2],nerve_gas);
	strychnine = nextValue(graphs[3],strychnine);


	Calcium_Gluconate = constrain(Calcium_Gluconate, 0, 1);
	HydrochloricAcid = constrain(HydrochloricAcid, 0, 1);
	plasma = constrain(plasma, 0, 1);
	glucagon = constrain(glucagon, 0, 1);


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
	text('mercury: ' + nf(mercury,1,2), 20,20);
	fill(colors[1]);
	text('hemlock: ' + nf(hemlock,1,2), 20,40);
	fill(colors[2]);
	text('nerve_gas: ' + nf(nerve_gas,1,2), 20,60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(Calcium_Gluconate,50,'Calcium_Gluconate');
	drawBar(HydrochloricAcid,200,'HydrochloricAcid');
	drawBar(plasma,350,'plasma');
	drawBar(glucagon,500,'glucagon');


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
