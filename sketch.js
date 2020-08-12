
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	boyIMG=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;  

//	boySprite=createSprite(100, 500, 50,80);
//	boySprite.addImage(boyIMG);
//	boySprite.scale=0.1;
stone = new Stone(235,420,60); 
mango1 =  new Mango(200,200,70);  
mango2 =  new Mango(250,250,70); 
mango3 =  new Mango(300,350,70);  
mango4 =  new Mango(259,150,70); 
mango5 =  new Mango(150,100,70); 

tree = new Tree(100,400,500,600);  

	//Create the Bodies Here.
	ground = new Ground(650,700,width,10);
	
//	tree.debug = true;

	

//	boyBody = Bodies.rectangle(250 , 600 , 50 ,80,{isStatic:true});
//	World.add(world, boyBody); 
	elastic = new Launcher(stone.body,{x:935,y:420}); 
	
	
	
	Engine.run(engine);
  
}
//when working on this next time try put the contraint on random point.

function draw() {
  rectMode(CENTER);
  background(180);
  image(boyIMG ,900,350,200,300);
 
  tree.display(); 
  stone.display();  
  mango1.display();
  mango2.display(); 
  mango3.display();
  mango4.display();
  mango5.display(); 
  ground.display(); 

 // boySprite.x= boyBody.position.x; 
 // boySprite.y= boyBody.position.y; 
  elastic.display(); 
  detectollision(stone,mango1); 
  detectollision(stone,mango2); 
  detectollision(stone,mango3); 
  detectollision(stone,mango4); 
  detectollision(stone,mango5);

 
} 
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    elastic.fly();
} 
function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position; 
	stoneBodyPosition = lstone.body.position; 
	
	var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}


function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:935,y:420}); 
		elastic.attach(stone.body);
	}
}