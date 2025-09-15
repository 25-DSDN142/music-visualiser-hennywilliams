let firstRun = true;
let myImage;
let myImage2;
var Ymove = 1; 
function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(222, 173, 207); //pink main background
if(firstRun) {
myImage = loadImage('A_boombox1.png') //bottom right side image
myImage2 = loadImage('Retroflower2.png') //back flower image
firstRun = false;

}

let boomboxY = map(drum,0,100,60,100);
image(myImage2,110,0);

fill(252, 184, 88);
ellipse(331,-20+Ymove,5);
ellipse(463,-50+Ymove,8);
ellipse(400,-70+Ymove,12);

let rect1Y = map(bass,0,100,250,400);
fill(166, 245, 154,80);
rect(80,rect1Y,80,270,20);
rect(170,250,80,270,20);
rect(260,250,80,270,20);
image(myImage,260,boomboxY);

noStroke();
fill(232, 223, 139);
ellipse(40,0+Ymove,10);

Ymove = Ymove + 1;
if (Ymove > 640){
Ymove = 0;

}



}