let a = [];
let b = [];


function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5Canvas');
  
}

function draw() {
  background(220);
  if(mouseX != pmouseX){
    a.push(mouseX);
    b.push(mouseY);
  }
  
  for(var i = 1; i < a.length+1; i++){
    fill(0,0,0,i);
    line(a[i-1],b[i-1],a[i],b[i]); 
    
  }
  
  if(a.length>100){
    a.shift();
    b.shift();
  }
  
}