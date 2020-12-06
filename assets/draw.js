var numberOfRipples, speedOfRipples, positionOfRipples;
let ripple1;
var i = -1;
let rippless = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5Canvas');
    strokeWeight(1.2);
  noFill();
}

function draw() {
   background(50, 111, 168);
  if(i > 0){
    rippless[i].create();
    rippless[i].move();
  }
}

function mouseClicked(){
  positionOfRipples = createVector(mouseX, mouseY);
   rippless.push(new Ripples(positionOfRipples));
  i++;
  
}







        var lastCircleSize;
// var b = false;

class Ripples{
  constructor(position){
    this.size = floor(random(7,20));
    this.speed = floor(random(1,5));
    this.positionX = position.x;
    this.positionY = position.y;
  this.b = false;
    this.bigger = 0;
    
    
  }
  
  create(){
    
     //background(220);
    //background(220);
    for(var i = 1; i < this.size+1; i++){
      stroke(0, 67, 125);
      circle(this.positionX,this.positionY,this.bigger*i*this.speed);
      stroke(98, 142, 179);
      circle(this.positionX,this.positionY,this.bigger*i*this.speed-5);
    }
    //this.bigger+=20;
    
  }
  
  move(){
    this.bigger+=0.1;
    
  }
  
}

    function windowResized(){
        resizeCanvas(windowWidth, windowHeight);
    }