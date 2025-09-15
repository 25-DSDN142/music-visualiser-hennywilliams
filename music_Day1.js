let firstRun = true;
let myImage;
let myImage2;
var Ymove = 1; 
function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(222, 173, 207); //pink main background
//images - boombox and flower
if(firstRun) {
myImage = loadImage('A_boombox1.png') //bottom right side image
myImage2 = loadImage('Retroflower2.png') //back flower image
firstRun = false;

}
//boombox anim + positioning
let boomboxY = map(drum,0,100,60,100);
image(myImage2,110,0);

//specs in background 
fill(255, 194, 252);
ellipse(331,-20+Ymove,5);
ellipse(463,-50+Ymove,8);
ellipse(400,-70+Ymove,12);
fill(250, 176, 107);
ellipse(560,-80+Ymove,5);
ellipse(230,-100+Ymove,8);
fill(255, 252, 252);
ellipse(10,-10+Ymove,8);
ellipse(600,-30+Ymove,8);
fill(240, 221, 137);
ellipse(360,-120+Ymove,8);
ellipse(150,-0+Ymove,12);
fill(169, 227, 245);
ellipse(30,-150+Ymove,5);
ellipse(400,-200+Ymove,8);
fill(196, 152, 235);
ellipse(300,-220+Ymove,8);
ellipse(420,-240+Ymove,4);


//volume bars (at the bottom)
let rect1Y = map(bass,0,100,250,400);
let rect2Y = map(vocal,0,100,250,450);
let rect3Y = map(other,0,100,250,350);
fill(235, 178, 87,80);
rect(30,rect1Y,80,270,20);
fill(245, 231, 127,80);
rect(120,rect2Y,80,270,20);
fill(242, 145, 145,80);
rect(210,rect3Y,80,270,20);
fill(191, 138, 175,80);
ellipse(600,450,340);
ellipse(0,10,320);
let ellipse1S = map(bass,0,100,100,130);
ellipse(560,70,ellipse1S);
let ellipseS = map(bass,0,100,60,90);
ellipse(60,230,ellipseS);
image(myImage,260,boomboxY);

//individual spec (setting up animation)
noStroke();
fill(232, 223, 139);
ellipse(40,0+Ymove,10);

Ymove = Ymove + 1;
if (Ymove > 710){
Ymove = 0;

}

}