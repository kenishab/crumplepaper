
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var paper,ground;
 var dustin1,dustin2;
 var dustin3;
 
function preload(){
 	
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,200,10,10);
    paper = new Paper(200,200,1.5);

    dustin1= new Dustin(810,260,300,10);
    dustin2 = new Dustin(810,260,300,10)
    dustin3 = new Dustin(810,260,300, 10)
  
}


function draw() {

  background("white");
  ground.display();
  dustin.display();
  paper.display();
  
  drawSprites();
 function keyPressed(){
	 if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.Body,paperObj.Body. position,{x:85,y:-85})
	 }
 }
}



