// namespacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box1,backgroundImg;

function preload(){
backgroundImg=loadImage("sprites/bg.png")
}
function setup() {
  
  createCanvas(1200,400);
 
  engine = Engine.create();
  world =engine.world;

  ground = new Ground(600,390,1200,20);

  box1 = new Box(800,370,70,70);
  box2= new Box(1000,370,70,70); 
  pig1 = new Pig(900,350);
  log1 = new Log(900,320,300,PI/2);
  box3 = new Box(800,280,70,70);
  box4 = new Box(1000,280,70,70); 
  pig2 = new Pig(900,240);
  log2 = new Log(900,200,300,PI/2);
  box5 = new Box (900,160,70,70);
  log3 = new Log(800,150,150,PI/10);
  log4 = new Log(1000,150,150,-PI/10);

  bird = new Bird(200,100);
}
 
function draw() {
  background(backgroundImg)
  Engine.update(engine);
  
  ground.display();
  
  box1.display();
  box2.display(); 
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
}