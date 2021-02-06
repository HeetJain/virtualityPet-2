//Create variables here
var dog,happyDog;
var foodS,foodStock;
var database;
var addFood,feedFood;
var fedTime,lastFed
var foodObj;

function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png")
  happyDog = loadImage("dogImg1.png")

}

function setup() {
  createCanvas(1000,500);
  dog = createSprite(800,250)
  dog.addImage(dogImg)
  dog.scale = 0.2
  database = firebase.database();


  foodObj = new Food();
  console.log(foodObj)
  foodObj.getFoodStock();


  feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("addFood");
  addFood.position(800,95);
  addFood.mousePressed(addFood) 
  
}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  })


  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Fed : " + lastFed%12 + "PM",350,30);
  }else if(lastFed==0){
    text("Last Fed : 12AM",350,30);
  }else{
    text("Last Fed : " + lastFed + "AM",350,30);
  }



}




function feedDog(){
  dog.addImage(happyDog);
  foodS-=1
  foodObj.updateFoodStock(foodS );
  database.ref('/').update({
    FeedTime:hour()
  })
}


function AddFoods(){
  foodS++;
  foodObj.updateFoodStock(foodS ); 
  }
