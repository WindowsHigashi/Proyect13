const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground,ball;
var left;
var right;




function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(600,390,1200,10);
  right = new Ground(800,390,20,250);
  left = new Ground(1100,390,20,250);
  

  
  var options_b={
  isStatic:false,
  restitution:0.3,
  friction:0,
  density:1.2
  }

ball=Bodies.circle(200,200,20,options_b);
World.add(world,ball);


 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{

  
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  left.show();
  right.show();
  keyPressed(UP_ARROW);
  Engine.update(engine);
  
  

}

function keyPressed(){
  if(keyCode=== UP_ARROW ){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:-2});
    if(ball.position.y<225){
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:2});
    }
    if(ball.position.x>1000){
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:2});
    }
    if(ball.position.x>800 && ball.position.y>350){
      World.pop(world,ball);
    }
  }
}