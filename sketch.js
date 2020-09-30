
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(50,350,10,10)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  ground=createSprite(300,380,600,10);
  
 ground.velocityX=-4
  ground.visible=false
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
  background("pink");
  
  score=score+Math.round(getFrameRate()/60)
  if(keyDown("space") && monkey.y>200){
    monkey.velocityY=-10;
  }
  text("survival rate:"+score,400,50)
   monkey.velocityY=monkey.velocityY+0.5 
  if (ground.x<0)
  {
   ground.x=ground.width/2; 
  }
  if(obstacleGroup.isTouching(monkey)){
      ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
                     
  }
  food();
  obstacles();
  drawSprites();
  monkey.collide(ground)
  
}
function food(){
 if(frameCount%80===0){
  banana=createSprite(600,Math.round(random(120,200)),10,10)
   banana.addImage("banana",bananaImage);
   banana.scale=0.2;
   banana.velocityX=-4;
   banana.lifetime=160;
   FoodGroup.add(banana)
 }
  
}
function obstacles(){
 if(frameCount%300===0){
  obstacle=createSprite(600,360,10,10)
obstacle.addImage(obstaceImage)
   obstacle.scale=0.2
   obstacle.velocityX=-4;
   obstacle.lifetime=160;
   obstacleGroup.add(obstacle);
 }
}





