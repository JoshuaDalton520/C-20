var a, b;

function setup() {
  createCanvas(800,400);
  
  a = createSprite(200,100,50,50);
  a.shapeColor = "green";

  b = createSprite(200,200,50,50)
  b.shapeColor = "green";
}

function draw() {
  background(0,0,0);
  
  a.x = mouseX;
  a.y = mouseY;

  if(a.x - b.x < 51 && b.x - a.x < 51 && a.y - b.y < 51 && b.y -a .y < 51) {
    a.shapeColor = "red";
    b.shapeColor = "red";
  }
  else {
    a.shapeColor = "green";
    b.shapeColor = "green";
  }

  console.log(a.y - b.y);

  drawSprites();
}