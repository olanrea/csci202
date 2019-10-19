// var c1; // color variable
// var c2; // color variable
// var c3; // color variable



// setting up the canvas
// function setup() 
//   createCanvas(displayWidth, displayHeight);
//   strokeWeight(15);
//   background(250);
//   c1 = 200;
//   c2 = 200;
//   c3 = 255;
// // setting up the canvas
// function setup() {
//   createCanvas(375, 667);
//   strokeWeight(15);
//   background(250);
//   c1 = 200;
//   c2 = 200;
//   c3 = 255;

//   loadImage('../mobile site/images/homeBackground.jpg');
  

 

// }




// // when the the mouse is pressed, or screen touched, a line is created.  
// function draw() {
//   stroke(c1, c2, c3);
//   if (mouseIsPressed === true) {
//     line(mouseX, mouseY, pmouseX, pmouseY);
//     // circle(mouseX, mouseY, pmouseX, pmouseY);
//    }
// }


// // double click and it randomly changes the color value.  
// function doubleClicked() {
//  c1 = random(0, 255);
//  c2 = random(0, 255);
//  c3 = random(0, 255);
// }


// img;
// function preload(){
//   img=loadImage ('../mobile site/images/logramps1.jpg');
// }

// GOES IN SETUP
//   img=createImage(100, 100);
//   img.loadPixles('logramps1.jpg')
//   createCanvas(100,100);
//   background(0);

//   loadImage('../mobile site/images/logramps1.jpg', img=> {
//     image(img, 0, 0);
//   });
// }

function setup() {
  createCanvas(2000, 2000);
  strokeWeight(10);
  stroke(0);
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
