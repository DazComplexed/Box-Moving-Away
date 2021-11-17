var sprite 

 function setup() {

   createCanvas(400,400);
    sprite = createSprite(200,200,25,25)
    sprite.velocityX= 1
    sprite.velocityY= -1 }

function draw() 
{
  background(30);
  drawSprites();
}
 


