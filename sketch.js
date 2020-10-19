const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];

var engine, world;


function preload(){

}
function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  for (var j =40; j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j =15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  

  
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  drawSprites();
}



 

  

