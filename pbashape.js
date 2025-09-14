function draw_one_frame(words, vocal, drum, bass, other, counter) {  
background(222, 173, 207);

let ellipseSize = map(bass,0,100,50,100);
let ellipseWidth = map(drum,0,100,0,540);

noStroke();
fill(189, 115, 166);
ellipse(ellipseWidth,290,ellipseSize);


}