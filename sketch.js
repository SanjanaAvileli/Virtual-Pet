//Create variables here
var puppy,dog, happyDog, database,foodS,foodStock;

function preload()
{
  //load images here
  happyDog = loadImage("images/dogImg1.png");
  dog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  
  puppy = createSprite(200,200);
  puppy.addImage(dog);
  puppy.scale = 0.5;
}


function draw() {  

  drawSprites();
  //add styles here

}



