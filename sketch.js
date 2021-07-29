var Front,front;
function setup() {
  createCanvas(displayWidth - 50, displayHeight-150);
  front=createSprite(400, 200, 50, 50);
}

function preload(){
  Front = loadImage("FrontFace.png");
}
function draw() {
  
  background("black"); 
  front.addImage("FrontFace",Front); 
  front.scale=0.5;
  drawSprites();
}