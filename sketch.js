
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var platform,paper;
var ball,BassClass;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);
	engine = Engine.create();
	world = engine.world;

	
	platform = new Ground(200, 370, 1800, 10 );
	ball = new Ball(350, 20, 10, 10);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  platform.display();
  ball.display();
  
}



