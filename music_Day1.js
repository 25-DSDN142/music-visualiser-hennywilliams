let firstRun = true;
let myImage; 
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(222, 173, 207); //pink main background

if(firstRun) {
myImage = loadImage('A_boombox1.png')

firstRun = false;

}

image(myImage,260,110);

}