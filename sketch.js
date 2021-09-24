var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(1520, 700);
  
  iss = createSprite(750,250);
  iss.addImage(issimg);
  iss.scale = 0.25;

  spacecraft = createSprite(700,350);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
}

function draw() {
  background(bg);
  

  if(!hasDocked){

     spacecraft.x = spacecraft.x + random(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.changeImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.changeImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
  }
}

   /*if(spacecraft.y <= (430) && spacecraft.x <= (740)){
     hasDocked = true;
    textSize(25);
    fill("white")
     text("Docking Successful!", 200, 300);
   }*/

  /*if(spacecraft.y <= (180) && spacecraft.x <= (740)){
    hasDocked = true;
   textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
   }*/
     
   /*if(spacecraft.y <= (320) && spacecraft.x <= (740)){
    hasDocked = true;
    textSize(25);
   fill("white")
    text("Docking UnSuccessful!", 200, 300);
   }*/

   if(spacecraft.y <= (320) && spacecraft.x <= (740)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }

  drawSprites();
}

