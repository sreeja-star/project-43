var bg,bg2,form,system,code,security;
var score=0;
var m1,m2;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg");
  bg2=loadImage("treasure.jpg");
  m1=loadSound("cave sound.mp3");
  m2=loadSound("t1.mp3");
  
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1000,500);

  
  security = new Security();
  system = new System();
  
  m1.play();
  
  
}

function draw() {
  background(bg);
  
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
 //
// add code for changing the background to the treasure background
  
  

  if(score === 3) {
   
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
   // m1.pause();
   m2.play();
    

  }
  console.log(score);

  drawSprites()
 
}