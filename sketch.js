var ground2
var ground
var trex ,trex_run;
function preload(){
 trex_run = loadAnimation("trex1.png","trex3.png","trex4.png") 
ground2 = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
trex = createSprite(50,160,20,50)
 trex.addAnimation("xyz",trex_run)
 trex.scale = 0.5
edges = createEdgeSprites()
ground = createSprite(200,180,400,20)
ground.addImage("abc",ground2)
}

function draw(){
  background("black")
  
  if(keyDown("space")){
    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY +0.5
  trex.collide(ground)
  ground.velocityX = -2
  if(ground.x < 0){
    ground.x = ground.width/2
  }
  drawSprites()

}
