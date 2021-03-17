
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
		var ground_options={
		isStatic:true
	}
    var paper_options={
	    isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

    ground=Bodies.rectangle(400,590,800,20,ground_options);
	paper=Bodies.circle(200,550,20,paper_options);
	fill("white");
    box1= new Box(600,580,150,10);
	box2= new Box(525,550,10,75);
	box3 = new Box(675,550,10,75);
	World.add(world,paper);
	World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("black");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS)
  ellipse(paper.position.x,paper.position.y,20,20)
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
}
function keyPressed(){
 if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
 }
}

