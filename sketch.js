var garden,rabbit,orangeLeaf,apple;
var gardenImg,rabbitImg,orangeLeafImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
  
spwanapple();
spwanorangeLeaf()
 drawSprites();
}
function spwanapple() {
  
  if (frameCount % 80 === 0) {
    apple = createSprite(random(60,350),40,10,10);
    apple.addImage(appleImg)
    apple.y = Math.round(random(80,0))
    apple.scale = 0.1;
    apple.velocityY = 2;
    apple.lifetime = 150
}
}
  
function spwanorangeLeaf() {
  
  if (frameCount % 80 === 0) {
    orangeLeaf= createSprite(random(60,350),40,10,10);
    orangeLeaf.addImage(orangeLeafImg)
    orangeLeaf.y = Math.round(random(80,0))
    orangeLeaf.scale = 0.1;
    orangeLeaf.velocityY = 2;
    orangeLeaf.lifetime = 150
  }
}
