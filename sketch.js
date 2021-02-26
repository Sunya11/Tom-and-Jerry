var mouse, mouse1, mouse2, mouse3
var cat, catStarting, catWalking, catSitting ;
var garden, gImg

function preload() {
    //load the images here
    mouse1 = loadImage("images/mouse1.png")
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png" )
    mouse3 = loadImage("images/mouse4.png" )

    catStarting = loadImage ("images/cat1.png") 
    catWalking = loadAnimation("images/cat2.png","images/cat3.png");
    catSitting = loadImage("images/cat4.png")

    gImg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite (500, 400)
    garden.addImage("background", gImg);

    mouse = createSprite(200, 600)
    mouse.addImage("starting mouse", mouse1)
    mouse.scale = 0.13
    cat = createSprite(700, 600)
    cat.addImage("startingCat", catStarting)
    cat.scale = 0.15
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
 
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("lastCatImg", catSitting)
        cat.changeAnimation("lastCatImg")
        cat.x = 300

        mouse.addAnimation("lastMouseImg", mouse3)
        mouse.changeAnimation("lastMouseImg")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -3
    cat.addAnimation("catMoving", catWalking)
    cat.changeAnimation("catMoving")
    mouse.addAnimation("movingMouse", mouse2)
    mouse.frameDelay = 25
    mouse.changeAnimation("movingMouse")
 
}

}

 