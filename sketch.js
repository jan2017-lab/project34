//Create variables here
var dog,dogIMG,happydog,happydogIMG;
var food,foodstock;
var database;

function preload()
{
  //load images here
  dogIMG.loadImage("Dog.png");
  happydogIMG.loadImage("happydog.png");
  
}

function setup() {

  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(350,250,20,20);
  dog.addImage(dogIMG);
  
  var foodstock = database.ref('food')
  foodstock.on("value",readStock)
  
}


function draw() {
  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)) {
    writestock(food)
    dog.addImage(happydogIMG)

  }

  drawSprites();

  //add styles here
  textSize(10)
  Fill("white")
 text("NOTE:Press UP ARROW key to feed the milk to the dog",100,50)


}

function readStock(data){
food = data.val();
}

function writeStock(x) {

if (x < 0) {
  x = 0
}
else{
  x = x -1
}

database.ref('/').update({
  food:x
  })
}

