var hr,min,sec;
var secAngle,minAngle,hourAngle;




function setup() {
  createCanvas(800,500);
  angleMode(DEGREES);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  hr = hour();
  min = minute();
  sec = second();  

textSize(30);




translate(350,250);
rotate(-90);

strokeWeight(10);
stroke(23,50,95);
noFill();
secAngle = map(sec,0,60,0,360);
strokeWeight(10);
stroke(200,404,60);
minAngle = map(min,0,60,0,360);
strokeWeight(10);
stroke(37,50,270);
hourAngle = map(hr % 12,0,12,0,360);


push();
rotate(secAngle);
stroke(255,0,50);
strokeWeight(5);
line(0,0,130,0);
pop();


push();
rotate(minAngle);
stroke(75,255,0);
strokeWeight(8);
line(0,0,120,0);
pop();


push();
rotate(hourAngle);
stroke(0,90,255);
strokeWeight(10);
line(0,0,85,0);
pop();

stroke(200,256,78);
point(0,0);


strokeWeight(5);
noFill();

stroke(255,0,0);
arc(0,0,400,400,0,secAngle);

strokeWeight(9);
stroke(0,255,0);
arc(0,0,370,370,0,minAngle);

strokeWeight(10);
stroke(10,7,255);
arc(0,0,340,340,0,hourAngle);




  drawSprites();
}