
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin
var ground
var wastePaper
function preload()
{
  this.image = loadImage("sprites/trashbin.png");
}

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

  dustbin = new Dustbin(760,650,15,70);
  wastePaper = new WastePaper(30,280,10,10);

	//Create the Bodies Here.
  slingshot = new SlingShot(wastePaper.body,{x:200, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  wastePaper.display();
  ground.display();
  dustbin.display();
  slingshot.display();
} 

function mouseDragged(){
  Matter.Body.setPosition(wastePaper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Slingshot.fly();
}