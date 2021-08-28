var fixedRect, movingRect,rect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(300,490.50,60);
  rect1.shapeColor="green";
  rect1.debug="true";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(isTouching(rect1,movingRect))
 {
   rect1.shapeColor="red";
   movingRect.shapeColor="red";
 }
 else{

 rect1.shapeColor="green";
   movingRect.shapeColor="green";
 }
  drawSprites();
}
function isTouching(a,b)
{
  if (a.x - b.x < a.width/2 + b.width/2
    && b.x - a.x < a.width/2 + a.width/2
    && b.y - a.y < a.height/2 + b.height/2
    && a.y - b.y < a.height/2 + b.height/2) {
  //movingRect.shapeColor="red";
  //fixedRect.shapeColor="red";
  return true;
}
else {
 // movingRect.shapeColor="green";
  //movingRect.shapeColor="green";
  return false;
}
}