let x = 0;

function setup() {
  createCanvas(400, 400);
}

function drawBuoy(xloc, yloc, size, num) {
  let arrayColor =["yellow","blue","green","red"];
  for (let i = 0; i < num; i++) {
    fill(arrayColor[i]);
    ellipse(50 +(100*i),(270),20,20);
  }
}

function draw() {
//ocean
  noStroke();
  background(68,167,196);
//sky
  fill(135, 206, 235)
  rect(0,0,400,200);
//sun
  noStroke();
  fill(255,255,0);
  ellipse(300, 46, 55, 55);
//island
  noStroke();
  fill(211,199,162);
  ellipse(0, 200, 220, 65);
//tree
  fill(165,73,42);
  rect(40,100,20,100);
  stroke(75,139,59)
  fill(77,255,77);
  ellipse(50,75,70,70);
//beach
  noStroke();
  fill(234,221,186);
  rect(0,360,400,50);
 
 
//boat
  stroke(255,87,51);
  fill(228,230,235);
  beginShape()
  vertex(145 + x, 190)
  vertex(155 + x, 210)
  vertex(260 + x, 210)
  vertex(270 + x, 190)
  vertex(145 + x, 190)
  endShape()
  //sail1
  fill(255,87,51)
  stroke(255,87,51)
  beginShape()
  vertex(206 + x, 190)
  vertex(206 + x, 115)
  vertex(167 + x, 185)
  vertex(206 + x, 185)
  endShape()
  fill(255,165,0)
  stroke(255,165,0)
  //sail2
  beginShape()
  vertex(210 + x, 123)
  vertex(210 + x, 185)
  vertex(240 + x, 185)
  vertex(210 + x, 123)
  endShape()
  if (x > width) {
    x = 0
  } else {
    x = x + 1
  }
//DRAW Buoys 
   //Line 
   stroke(250,250,250); 
   line(0, 270, 400, 270);
 
  drawBuoy(width,height,20,4);
}