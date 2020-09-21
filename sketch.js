var movingRect,firxedRect;



function setup() {
createCanvas(800,400);
  
  movingRect = createSprite(100, 200, 30, 30);
  fixedRect = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if (movingRect.x - fixedRect.x <= fixedRect.width/2+movingRect.width/2 && 
    fixedRect.x - movingRect.x <= movingRect.width/2+fixedRect.width/2) {
      console.log("hello");
      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "red";
    
  }
  else{
    console.log("y");
    fixedRect.shapeColor = "pink";
      movingRect.shapeColor = "pink";
  }
  drawSprites();
}