
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(600,550,200,20)
   ground2 = new Ground(810,330,200,20)
   b1 = new Box(600,520,30,30)
   b2 = new Box(630,520,30,30)
   b3 = new Box(570,520,30,30)
   b4 = new Box(660,520,30,30)
   b5 = new Box(540,520,30,30)
   b6 = new Box(600,490,30,30)
   b7 = new Box(630,490,30,30)
   b8 = new Box(570,490,30,30)
   b9 = new Box(600,460,30,30)
   b10 = new Box(810,300,30,30)
   b11 = new Box(840,300,30,30)
   b12 = new Box(780,300,30,30)
   b13 = new Box(860,300,30,30)
   b14 = new Box(760,300,30,30)
   b15 = new Box(810,270,30,30)
   b16 = new Box(840,270,30,30)
   b17 = new Box(780,270,30,30)
   b18 = new Box(810,240,30,30)
   box = new Box(210,300,30,40)
   object = Matter.Bodies.polygon(400,300,30,40)
   World.add(world,object)
  sling = new Slingshot(object.body,box.body,{x:210,y:300})
   //World.add(world,object)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  ground.display()
 
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  ground2.display()
  b11.display()
  b13.display()
  b12.display() 
  b14.display()
  b10.display()
  b15.display()
  b16.display()
  b17.display()
  b18.display()
 object.display()
  box.display()
  sling.display()
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(object.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
sling.fly()
}

