var bg,bg2,form,system,code,security;
var score=0;
var tresure,tresureImage

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  tresureImage=loadImage("treasure.jpg")
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  
  

  if(score === 3) {
    clear()
    background(tresureImage)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);

  }

  drawSprites()
}