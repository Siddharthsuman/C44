var PLAY=3;
var END=2;
var STORY=1;
var BEGIN=0
var gameState=PLAY;
var Otscore=0;
var score=0;




var start1,start2,start3,start4,start5,start6,start7,start8,start9,start10,start11,start12,start13,start14,start15,start16,start17,start18,start19,start20,start21;
var start1Img,start2Img,start3Img,start4Img,start5Img,start6Img,start7Img,start8Img,start9Img,start10Img,start11Img,start12Img,start13Img,start14Img,start15Img,start16Img,start17Img,start18Img,start19Img,start20Img,start21Img;
var SToB,StobImg,StartB,StartBImg;
var Start,StartImg
var BackB,BackBImg;
function preload(){
  start1Img=loadImage("Story/S1.jpg")
  start2Img=loadImage("Story/S2.jpg")
  start3Img=loadImage("Story/S3.jpg")
  start4Img=loadImage("Story/S4.jpg")
  start5Img=loadImage("Story/S5.jpg")
  start6Img=loadImage("Story/S6.jpg")
  start7Img=loadImage("Story/S7.jpg")
  start8Img=loadImage("Story/S8.jpg")
  start9Img=loadImage("Story/S9.jpg")
  start10Img=loadImage("Story/S10.jpg")
  start11Img=loadImage("Story/S11.jpg")
  start12Img=loadImage("Story/S12.jpg")
  start13Img=loadImage("Story/S13.png")
  start14Img=loadImage("Story/S14.png")
  start15Img=loadImage("Story/S15.png")
  start16Img=loadImage("Story/S16.png")
  start17Img=loadImage("Story/S17.jpg")
  start18Img=loadImage("Story/S18.jpg")
  start19Img=loadImage("Story/S19.jpg")
  start20Img=loadImage("Story/S20.jpg")
  start21Img=loadImage("Story/S21.jpg")

  StobImg=loadImage("Buttons/StoryB.jpg");
  StartImg=loadImage("Story/Start.jpg");
  StartBImg=loadImage("Buttons/StartB.jpg")
  BackBImg=loadImage("Buttons/backbutton.png")

}


function setup() {
  createCanvas(1350,670);
  
Stob=createSprite(1230,450,1,1);
Stob.addImage(StobImg);
Stob.scale=0.15;
Stob.visible=true 

StartB=createSprite(1230,550,1,1);
StartB.addImage(StartBImg);
StartB.scale=0.35


start1=createSprite(670,350,1,1);
start1.addImage(start1Img);
start1.scale=1;
start1.visible=false;

start2=createSprite(670,320,1,1);
start2.addImage(start2Img);
start2.scale=1;
start2.visible=false;

start3=createSprite(670,350,1,1);
start3.addImage(start3Img);
start3.scale=1;
start3.visible=false;

start4=createSprite(670,350,1,1);
start4.addImage(start4Img);
start4.scale=1;
start4.visible=false;

start5=createSprite(670,350,1,1);
start5.addImage(start5Img);
start5.scale=1;
start5.visible=false;

start6=createSprite(670,350,1,1);
start6.addImage(start6Img);
start6.scale=1;
start6.visible=false;

start7=createSprite(670,350,1,1);
start7.addImage(start7Img);
start7.scale=1;
start7.visible=false;

start8=createSprite(670,350,1,1);
start8.addImage(start8Img);
start8.scale=1;
start8.visible=false;

start9=createSprite(670,350,1,1);
start9.addImage(start9Img);
start9.scale=1;
start9.visible=false;

start10=createSprite(670,350,1,1);
start10.addImage(start10Img);
start10.scale=1;
start10.visible=false;

start11=createSprite(670,330,1,1);
start11.addImage(start11Img);
start11.scale=0.95;
start11.visible=false;

start12=createSprite(670,350,1,1);
start12.addImage(start12Img);
start12.scale=1;
start12.visible=false;

start13=createSprite(670,350,1,1);
start13.addImage(start13Img);
start13.scale=0.6;
start13.visible=false;

start14=createSprite(670,350,1,1);
start14.addImage(start14Img);
start14.scale=0.6;
start14.visible=false;

start15=createSprite(670,350,1,1);
start15.addImage(start15Img);
start15.scale=0.6;
start15.visible=false;

start16=createSprite(670,350,1,1);
start16.addImage(start16Img);
start16.scale=0.6;
start16.visible=false;

start17=createSprite(670,350,1,1);
start17.addImage(start17Img);
start17.scale=1;
start17.visible=false;

start18=createSprite(670,350,1,1);
start18.addImage(start18Img);
start18.scale=1;
start18.visible=false;

start19=createSprite(670,350,1,1);
start19.addImage(start19Img);
start19.scale=1;
start19.visible=false;

start20=createSprite(670,350,1,1);
start20.addImage(start20Img);
start20.scale=1;
start20.visible=false;

start21=createSprite(670,350,1,1);
start21.addImage(start21Img);
start21.scale=1;
start21.visible=false;

BackB=createSprite(1130,550,1,1);
BackB.addImage(BackBImg);
BackB.scale=0.35
BackB.visible=false




}

function draw() {
  background(StartImg);  
  //text("Score: "+ Otscore, 50,50);
  
  start21.depth = start21.depth;
    BackB.depth =start21.depth + 1;
 if(mousePressedOver(Stob)){
gameState=STORY;
  }
  if(gameState===STORY){
    Otscore = Otscore + Math.round(getFrameRate()/60);
    if(Otscore>3){
      start1.visible=true;
      Stob.visible=false;
      StartB.visible=false;
      BackB.visible=true;
    }
   if(Otscore>30){
     start1.visible=false;
     start2.visible=true;
   }
   if(Otscore>180){
    start2.visible=false;
    start3.visible=true;
  }
  if(Otscore>290){
    start3.visible=false;
    start4.visible=true;
  }
  if(Otscore>450){
    start4.visible=false;
    start5.visible=true;
  }
  if(Otscore>640){
    start5.visible=false;
    start6.visible=true;
  }
  if(Otscore>810){
    start6.visible=false;
    start7.visible=true;
  }
  if(Otscore>960){
    start7.visible=false;
    start8.visible=true;
  }
  if(Otscore>1200){
    start8.visible=false;
    start9.visible=true;
  }
  if(Otscore>1440){
    start9.visible=false;
    start10.visible=true;
  }
  if(Otscore>1680){
    start10.visible=false;
    start11.visible=true;
  }
  if(Otscore>1930){
    start11.visible=false;
    start12.visible=true;
  }
  if(Otscore>2060){
    start12.visible=false;
    start13.visible=true;
  } 
  if(Otscore>2280){
    start13.visible=false;
    start14.visible=true;
  }
  if(Otscore>2500){
    start14.visible=false;
    start15.visible=true;
  }
  if(Otscore>2850){
    start15.visible=false;
    start16.visible=true;
  } 
  if(Otscore>3150){
    start16.visible=false;
    start17.visible=true;
  }
  if(Otscore>3300){
    start16.visible=false;
    start17.visible=true;
  }
  if(Otscore>3720){
    start17.visible=false;
    start18.visible=true;
  }
  if(Otscore>4000){
    start18.visible=false;
    start19.visible=true;
  }
  if(Otscore>4280){
    start19.visible=false;
    start20.visible=true;
    BackB.visible=true;
  }
  if(Otscore>4630){
    start20.visible=false;
    start21.visible=true;
    BackB.visible=true;
    
  }
  if(Otscore>4800){
    start21.visible=false;
  }
  if(mousePressedOver(BackB)){
    start1.visible=false;
    start21.visible=false;
    BackB.visible=false;
    StartB.visible=true;
    Stob.visible=true;
    Otscore=0
  }
  }

  

  drawSprites();
}