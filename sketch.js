var dog, dogIMG,happydogIMG, happyDog, database;
var foodS, foodStock;

function preload()
{
  dogIMG = loadImage("images/Dog.png")
  happydogIMG = loadImage("images/happydog.png")
}

function setup() {
  createCanvas(800, 700);
  
  dog=createSprite(400,350);
  dog.addImage(dogIMG);
  dog.scale = 0.2;

  var title = createElement('h3');
  title.html("Press 'UP ARROW' to feed your pet some milk");
  title.position(550,50);

  
  
  
}


function draw() {
  
  background(0,133,160);
 







  drawSprites();
  //add styles here

}



