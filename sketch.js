const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine, box;
var ground, ball;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  box = Bodies.rectangle(400, 200, 30, 50);
  var ball_options  = {
    restitution : 0.8
  }
  ball = Bodies.circle(200, 200, 40, ball_options);
  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(400, 380, 800, 20, ground_options);
  World.add(world, box);
  World.add(world, ground);
  World.add(world, ball);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(box.position.x, box.position.y, 20, 45);
  rect(ground.position.x, ground.position.y, 800, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40);
}