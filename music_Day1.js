let firstRun = true;
let myImage;
let myImage2;
var Ymove = 1; 
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(222, 173, 207); //pink main background

if(firstRun) {
myImage = loadImage('A_boombox1.png') //bottom right side image
myImage2 = loadImage('Retroflower2.png') 
firstRun = false;

}


image(myImage2,60,30);
image(myImage,260,110);

noStroke();
fill(232, 223, 139);
ellipse(40,0+Ymove,10);

Ymove = Ymove + 1;
if (Ymove > 640){
Ymove = 0;

}

fill(252, 184, 88);
ellipse(331,-20+Ymove,5);
ellipse(463,-50+Ymove,8);
ellipse(400,-70+Ymove,12);





}