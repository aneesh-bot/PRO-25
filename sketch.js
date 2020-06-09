const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var dustbin
var ball;

function preload()
{

}

function setup() {
	createCanvas(1350, 605);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-10,width,20);

  ball = new PaperBall(100,585,40);
  
 dustbin = new Dustbin(1200,585);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  dustbin.display();
 
}
function keyPressed(){
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-100 });
}
}


