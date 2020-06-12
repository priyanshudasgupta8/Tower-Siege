const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(420,300,300,10);
 
  //level one
  block1 = new Block(300,275,40,40);
  block2 = new Block(340,275,40,40);
  block3 = new Block(380,275,40,40);
  block4 = new Block(420,275,40,40);
  block5 = new Block(460,275,40,40);
  block6 = new Block(500,275,40,40);
  block7 = new Block(540,275,40,40);
  //level two
  block8 = new Block(340,235,40,40);
  block9 = new Block(380,235,40,40);
  block10 = new Block(420,235,40,40);
  block11 = new Block(460,235,40,40);
  block12 = new Block(500,235,40,40);
  //level three
  block13 = new Block(380,195,40,40);
  block14 = new Block(420,195,40,40);
  block15 = new Block(460,195,40,40);
  //top
  block16 = new Block(420,155,40,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:100});

}
function draw() {
  background(0); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  stand1.display();

  strokeWeight(2);
  stroke(15);

  fill("turquoise ");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("lightpink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("lightgreen");
  block13.display();
  block14.display();
  block15.display();

  fill("gold");
  block16.display();
  
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}