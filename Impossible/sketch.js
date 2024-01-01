var wall_1;
var wall_2;
var wall_3;

var wall_5;
var wall_6;

var wall_8;
var wall_9;
var wall_10;
var wall_11;
var wall_12;
var wall_13;
var wall_14;
var wall_15;
var cube;
var walls;
var redcube;
var redcube_1;
var redcube_2;
var redcube_3;
var redcube_4;
var redcube_5;
var redcube_6;
var redcube_7;
var redcube_8;
var redcube_9;
var redcube_10;
var redcube_11;
var redcube_12;
var redcube_13;
var redcube_14;
var mpcs;
var score=0;
var lives=5;
var red_cubes=[ redcube
 , redcube_1
 , redcube_2
 , redcube_3
 , redcube_4
 , redcube_5
 , redcube_6]
 
function setup(){
  createCanvas(2250,600);
  mpcs = createGroup();
  walls = createGroup();
  wall_2=createSprite(172,75, 150,4);
  wall_1=createSprite(100, 300,6,450);
  wall_3=createSprite(250, 260,6,375);
  wall_5=createSprite(262,445, 30,4);
  wall_6=createSprite(277, 260,6,375);
  wall_8=createSprite(497, 522, 800, 6)
  wall_9=createSprite(686, 75, 825, 6)
  wall_10=createSprite(897, 348,6,355); 
  wall_11=createSprite(909,170, 30,6);
  wall_12=createSprite(921, 348,6,355);  
  wall_13=createSprite(1095, 300,6,450);
  wall_14=createSprite(1008,525, 180,4);
  wall_15=createSprite(310, 470, 6, 100);
  walls.add(wall_1)
  walls.add(wall_2)
  walls.add(wall_3)
  walls.add(wall_5)
  walls.add(wall_6)
  walls.add(wall_8)
  walls.add(wall_9)
  walls.add(wall_10)
  walls.add(wall_11)
  walls.add(wall_12)
  walls.add(wall_13)
  walls.add(wall_14)
  walls.add(wall_15)
   cube=createSprite(110,325, 20,20);
   cube.shapeColor = "green"
   redcube=createSprite(280,400, 20,20);
   redcube.shapeColor = "red"
   redcube.velocityX = 13;
   redcube_1=createSprite(280,300, 20,20);
   redcube_1.shapeColor = "red"
   redcube_1.velocityX = 13;
   redcube_2=createSprite(280,200, 20,20);
   redcube_2.shapeColor = "red"
   redcube_2.velocityX = 13;
   redcube_3=createSprite(380,509, 20,20);
   redcube_3.shapeColor = "red"
   redcube_3.velocityY = 13;
   redcube_4=createSprite(540,509, 20,20);
   redcube_4.shapeColor = "red"
   redcube_4.velocityY = -13;
   redcube_5=createSprite(680,509, 20,20);
   redcube_5.shapeColor = "red"
   redcube_5.velocityY = -13;
   redcube_6=createSprite(830,509, 20,20);
   redcube_6.shapeColor = "red"
   redcube_6.velocityY = -13;
   redcube_7=createSprite(310, 470, 20, 20);
   redcube_7.shapeColor = "red"
   redcube_7.velocityX = -13;
   redcube_8=createSprite(310, 480, 50, 20);
   redcube_8.shapeColor = "red"
   redcube_8.velocityX = -13;
   redcube_9=createSprite(170,509, 20,20);
   redcube_9.shapeColor = "red"
   redcube_9.velocityY = -13;
   redcube_10=createSprite(190,505,120,20);
   redcube_10.shapeColor = "red"
   redcube_10.velocityY = -13;
   redcube_11=createSprite(530,509, 20,20);
   redcube_11.shapeColor = "red"
   redcube_11.velocityX = 13;
   redcube_12=createSprite(350,489, 20,20);
   redcube_12.shapeColor = "red"
   redcube_12.velocityX = 13;
   redcube_13=createSprite(350,89, 20,20);
   redcube_13.shapeColor = "red"
   redcube_13.velocityX = 14;
   redcube_14=createSprite(350,130, 20,20);
   redcube_14.shapeColor = "red"
   redcube_14.velocityX = 14;
   mpcs.add(redcube)
   mpcs.add(redcube_1)
   mpcs.add(redcube_2)
   mpcs.add(redcube_3)
   mpcs.add(redcube_4)
   mpcs.add(redcube_5)
   mpcs.add(redcube_6)
   mpcs.add(redcube_7)
   mpcs.add(redcube_8)
   mpcs.add(redcube_9)
   mpcs.add(redcube_10)
   mpcs.add(redcube_11)
   mpcs.add(redcube_12)
   mpcs.add(redcube_13)
   mpcs.add(redcube_14)


  
}

function draw(){
    background(00)
    if (keyIsDown(UP_ARROW)){
        cube.y += -10;
    }
    if (keyIsDown(RIGHT_ARROW)){
        cube.x += 10;
    }
    if (keyIsDown(LEFT_ARROW)){
        cube.x += -10;
    }
    if (keyIsDown(DOWN_ARROW)){
        cube.y += 10;
    }
    redcube.bounceOff(walls)
    redcube_1.bounceOff(walls)
    redcube_2.bounceOff(walls)
    redcube_3.bounceOff(walls)
    redcube_4.bounceOff(walls)
    redcube_5.bounceOff(walls)
    redcube_6.bounceOff(walls)
    redcube_7.bounceOff(walls)
    redcube_8.bounceOff(walls)
    redcube_9.bounceOff(walls)
    redcube_10.bounceOff(walls)
    redcube_11.bounceOff(walls)
    redcube_12.bounceOff(walls)
    redcube_13.bounceOff(walls)
    redcube_14.bounceOff(walls)


    
    if (redcube.isTouching(wall_10)){
        redcube.x += 3          
    }
    if (redcube.isTouching(wall_6)){
        redcube.x += 3            
    }
    if (cube.isTouching(mpcs)){
        cube.x = 110
        cube.y = 325
        console.log("hi")
        score = 0;
        lives-=1
    }
    if (cube.x > 921){
        textSize(24) 
       text("Congratulations", 923, 300 );
       score+=1
       
    }

    textSize(24)
    text("Start", 150, 325)
    textSize(24)
    text("END", 970, 325)
    textSize(24)
    text("Score:"+score, 70, 25)
    textSize(24)
    text("Lives:"+lives, 200, 25)
    textSize(24)
    
    cube.collide(walls);
    drawSprites();
}