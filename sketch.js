var movingRect;
var fixedRect;
var rect1;
var rect2;
function setup() {
  createCanvas(800,400);
fixedRect =  createSprite(400, 200, 50, 50);
movingRect = createSprite(600,200,50,50);
fixedRect.debug = false;
movingRect.debug = false;
fixedRect.shapeColor = 'red';
  movingRect.shapeColor = 'red';
  rect1 = createSprite(300,100,50,50)
  rect2 = createSprite(300,300,50,50)
  rect1.velocityY = 2
  rect2.velocityY = -3
  rect1.shapeColor = 'purple'
  rect2.shapeColor = 'yellow'
}


function draw() {
  background(255,255,255);  
  movingRect.x =mouseX;
  movingRect.y =mouseY;
 
  if(isTouching(movingRect,fixedRect))
  {
    fixedRect.shapeColor = 'green';
    movingRect.shapeColor = 'green';
  }
  else{
    fixedRect.shapeColor = 'red';
    movingRect.shapeColor = 'red';
  }

  bounceOff(rect1,rect2);
  drawSprites();
}




