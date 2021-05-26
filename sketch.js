var cat;
var catImg1,catImg2,catImg3,catImg4;
var gardenImg;
var mouseImg1,mouseImg2,mouseImg3,mouseImg4;
var mouse;
function preload() {
    //loading image of cat
    catImg1=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png")
    catImg3=loadAnimation("images/cat3.png")
    catImg4=loadAnimation("images/cat4.png")

    //loading image of mouse
    mouseImg1=loadAnimation("images/mouse1.png")
    mouseImg2=loadAnimation("images/mouse2.png")
    mouseImg3=loadAnimation("images/mouse3.png")
    mouseImg4=loadAnimation("images/mouse4.png")

    //loading image of background
    gardenImg=loadImage("sprites/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat=createSprite(-3,4,4)
  mouse=createSprite(6,5,5)

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if  (cat.x < mouse.x <(cat.width-mouse.width)/2)

    drawSprites()
}
    
    function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode=== LEFT_ARROW){
    mouse.addAnmation("mouseTeasing",mouseImg1,mouseImg2,mouseImg3,mouseImg4)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=25
  }

  if (keyCode === RIGHT_ARROW){
     cat.addAnimation("catMoving",catImg1,catImg2,catImg3,catImg4)
     cat.changeAnimation("catMoving")
     cat.frameDelay=25
  }
}
