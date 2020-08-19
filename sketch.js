var bananaImage,obstacleImage,obstacleGroup,bananaGroup;
var score,player_running,invisibleGround; 
var Background;
function preload(){
  backgroundImage = loadImage("jungle.png");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage= loadImage("stone.png"); 
}



function setup() {
  createCanvas(400, 400);
  
  score = 0;
  Background = createSprite(150,150,400,400);
  Background.addImage("ground",backgroundImage);
  Background.scale = 2;
  Background.x = Background.width/2;
  Background.velocityX = -5;
  player = createSprite(20,300,20,50);
  player.addAnimation("running", player_running);
  player.scale = 0.1;
  
  invisibleGround = createSprite(200,390,400,10);
  invisibleGround.visible = false;
  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background("white");
  if(Background.x<100){
   Background.x = Background.width/2; 
  }
  if(bananaGroup.isTouching(player)){
  bananaGroup.destroyEach();
    score=score+2;   
    
  }
  
  switch(score){
  case 10:player.scale = 0.12; 
      break;
    case 20:player.scale = 0.14;
      break;
      case 30:player.scale = 0.16;
      break;
      case 40:player.scale = 0.18;
      break;
  }
  if(keyDown("space")){
    player.velocityY=-13;
  }
  player.velocityY = player.velocityY+0.8;
  player.collide(invisibleGround);
  spawnBanana();
  spawnObstacles();
  if(obstacleGroup.isTouching(player)){
   player.scale = 0.08; 
    
  }
  drawSprites();
  

 stroke("white");
  textSize(20);
fill("white");
text("score:"+score,300,50);
   
}
function spawnBanana(){
  if(frameCount%80===0){
    var Banana = createSprite(400,200,40,40);
  Banana.y = random(120,200);
  Banana.addImage("banana",bananaImage);
  Banana.scale = 0.05;
  Banana.velocityX = -4;
   Banana.lifetime = 100; 
   bananaGroup.add(Banana);
    
  }
 
}
function spawnObstacles(){
 if(frameCount%200===0){
  var Obstacle = createSprite(400,350,30,20);
   Obstacle.velocityX = -4;
   Obstacle.addImage("obstacle",obstacleImage);
   Obstacle.scale =0.2; 
   Obstacle.lifetime = 100;
   obstacleGroup.add(Obstacle);
 }
  
  
  
}