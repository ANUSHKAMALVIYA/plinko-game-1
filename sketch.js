const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions = [];
var divisionsHeight = 300;
var particles = [];
var plinkos = [];

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  //create the Bodies Here.
  ground = new Ground(400,690,8000,20);

 
  for(var i =0; i<=width; i=i+80){
    division.push(new Division(i,height-divisionWeight/2,10,divisionWeight));
  } 
  for(var j=75; j<width; j=j+50){
    plinkos.push(new plinko(j,75));
  }
  for(var j=50; j<width-10; j=j+50){
    plinkos.push(new plinko(j,175));
  }
  for(var j=75; j<width; j=j+50){
    plinkos.push(new plinko(j,275));
  }
  for(var j=50; j<width-10; j=j+50){
    plinkos.push(new plinko(j,375));
  }

  //for ()

Engine.run(engine);


}

function draw(){
  rectMode(CENTER);
  background(0)

  drawSprites();

  for(var n=0; n<divisions.length; n+n){
    divisions[n].display();
  }
  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-30,width/2-30),10,10));
  }
  for(var h=0; h<particles.length;h++){
    particle[h].display();
  }
  for(var j=0; h<particles.length;j++){
    particle[j].display();
  }

  ground.display();
}