var movingrect,fixedrect;

function setup() {

  createCanvas(800,400);

 fixedrect=createSprite(200, 200, 50, 100);
 movingrect=createSprite(400, 200, 100, 50);
 fixedrect.shapeColor="lavender";
 movingrect.shapeColor="lavender";
}
function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX;
 movingrect.y = World.mouseY;
 if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
   movingrect.y - fixedrect.y<fixedrect.height/2+movingrect.height/2&& 
   fixedrect.y - movingrect.y<fixedrect.height/2+movingrect.height/2){
  fixedrect.shapeColor="pink";
  movingrect.shapeColor="pink";

 }
 else{
  fixedrect.shapeColor="lavender";
  movingrect.shapeColor="lavender";
 }
  drawSprites();
}