var c1; // color variable
var c2; // color variable
var c3; // color variable



// setting up the canvas
img;
function preload(){
  img=loadImage ('../mobile site/images/logramps1.jpg');
}


function setup() {
  img=createImage(100, 100);
  img.loadPixles('logramps1.jpg')
  createCanvas(100,100);
  background(0);

  loadImage('../mobile site/images/logramps1.jpg', img=> {
    image(img, 0, 0);
  });
  
  createCanvas(displayWidth, displayHeight);
  strokeWeight(15);
  background(250);
  c1 = 200;
  c2 = 200;
  c3 = 255;

 

}




// when the the mouse is pressed, or screen touched, a line is created.  
function draw() {
  stroke(c1, c2, c3);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    // circle(mouseX, mouseY, pmouseX, pmouseY);
   }
}


// double click and it randomly changes the color value.  
function doubleClicked() {
 c1 = random(0, 255);
 c2 = random(0, 255);
 c3 = random(0, 255);
}