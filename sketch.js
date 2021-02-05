
var tom, jerry, ground;

var tomImage, jerryImage, groundImage;

var tom_walk, jerry_hi, tom_sit, jerry_sit;

var distanceX;

function preload() {
    //load the images here
    groundImage=loadImage("images/garden.png");
    tomImage=loadImage("images/tomOne.png");
    jerryImage=loadImage("images/jerryOne.png");
    tom_walk=loadAnimation("images/tomThree.png","images/tomTwo.png");
    jerry_hi=loadAnimation("images/jerryThree.png","images/jerryTwo.png");
    tom_sit=loadAnimation("images/tomFour.png");
    jerry_sit=loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(787,700);
    //create tom and jerry sprites here
     ground=createSprite(300,350,10,10);
     ground.addImage(groundImage);

    tom=createSprite(600,500,50,50);
    tom.addImage(tomImage);
    tom.addAnimation("walking", tom_walk);
    tom.addAnimation("tSit",tom_sit)
    tom.debug=true;
    tom.scale=0.1;
    
    jerry=createSprite(100,500,50,50);
    jerry.addImage(jerryImage);
    jerry.addAnimation("hi", jerry_hi);
    jerry.addAnimation("jSit",jerry_sit);
    jerry.debug=true;
    jerry.scale=0.1;

 console.log (distanceX=jerry.width/2 + tom.width/2);
 
 
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2) 
   {
    tom.changeAnimation("tSit",tom_sit);
    jerry.changeAnimation("jSit",jerry_sit);
    tom.velocityX=0;
    tom.x=160;

    }

    else{
        tom.addImage(tomImage);
        jerry.addImage(jerryImage);
       }

 

    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW)){
   tom.velocityX=-4;
   tom.changeAnimation("walking",tom_walk);
   jerry.changeAnimation("hi",jerry_hi);
  }
}
