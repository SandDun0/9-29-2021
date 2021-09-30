const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var groud, ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
  World.add(world, ground);
  
  var ball_options = {
    isStatic: false
  }
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);


}





function draw() {
  background(255,255,255);  
  
  Engine.update()
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);





}




