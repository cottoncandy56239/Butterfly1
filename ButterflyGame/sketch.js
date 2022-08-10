var bg, bg_image
var butterfly, butterfly_image

function preload(){
  bg_image = loadImage("Background.jpeg");
  butterfly_image = loadImage("Butterfly.png")
}
function setup(){
createCanvas(800,500);
bg = createSprite(400,250,800,500)
bg.addImage(bg_image);
bg.velocityX = -2;
butterfly = createSprite(100,250,100,100)
butterfly.addImage(butterfly_image);
butterfly.scale = 0.5;
}

function draw(){
background("skyblue")
if(bg.x<=300){
  bg.x = width/2
}
if(keyIsDown(UP_ARROW)){
  butterfly.position.y -= 5
}
if(keyIsDown(DOWN_ARROW)){
  butterfly.position.y += 5
}
drawSprites();
}