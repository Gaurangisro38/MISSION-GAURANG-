var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var line1,line2,line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800,500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="yellow";

line1=createSprite(300,395,10,100)
line1.shapeColor="red";

line2=createSprite(500,400,10,100);
line2.shapeColor="red";

line2=createSprite(500,400,10,100);
line2.shapeColor="red";

line3=createSprite(400,440,200,10);
line3.shapeColor="red";



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
	
	 Matter.Body.setStatic(packageBody, false);
    
  }
}



