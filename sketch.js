
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boy,stone,base;
var slingShot;
function preload()
{
boyimg = loadImage("Plucking mangoes/boy.png");	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(1000,600,20,20);
stone.scale=0.1;

	boy=createSprite(1000,630);
	boy.addImage(boyimg);
	boy.scale=0.1;
base = new Base(600,690,1200,10)
	
mango1=new Mango(210,380);
mango2=new Mango(150,400);
mango3=new Mango(290,400);
mango4=new Mango(360,370);
mango5=new Mango(200,300);
mango6=new Mango(90,440);
mango7=new Mango(40,370);
mango8=new Mango(130,330);
mango9=new Mango(280,340);
mango10=new Mango(380,420);
mango11=new Mango(260,270);


tree = new Tree(220,620);

slingShot = new SlingShot(stone.body,{x:950,y:570})

}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 //boy.display();
 
 detectColision(stone,mango1);
 detectColision(stone,mango2);
 detectColision(stone,mango3);
 detectColision(stone,mango5);
 detectColision(stone,mango6);
 detectColision(stone,mango7);
 detectColision(stone,mango8);
 detectColision(stone,mango9);
 detectColision(stone,mango10);
 detectColision(stone,mango4);
 detectColision(stone,mango11);

tree.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
boy.display();

stone.display();

slingShot.display();
base.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
 function mouseReleased (){
     slingShot.fly();
 }  

 function detectColision(stone,mango){
	 mangoBodyPosition=mango.body.position;
	 stoneBodyPosition=stone.body.position;

	 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	 if(distance<=mango.r+stone.r){
		 Matter.Body.setStatic(mango.body,false);
	 }
 }

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:950,y:570});
		slingShot.attach(stone.body);
	}
}
