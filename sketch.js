var ball, leftBar,rightBar,bottomBar, ground,ballImg,binImg,bin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

binImg = loadImage("images/bin.png");	
}

function setup() {
	createCanvas(800, 700);
	bin = createSprite(600,570,100,30);
	bin.addImage("dustbin",binImg);
	bin.scale = 0.8;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(70,200,20);
	
	leftBar = new Dustbin(515,645,20,400);
	rightBar = new Dustbin(686,645,20,400);
	bottomBar = new Dustbin(600,690,150,20);
	ground = new Dustbin(400,700,800,10);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  ball.display();
  leftBar.display();
  rightBar.display();
  bottomBar.display();
  ground.display();
  drawSprites();

}
function keyPressed(){
	if(keyCode ===UP_ARROW)
	Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-70})
}


