var x;
var y;
var z;
var a;
var b;
var c;
var points;
var canvasSize;
function setup() {
  colorMode(HSB);
  x = 0.1;
  y = 0;
  z = 0;
  a = 10;
  b = 28;
  c = 8.0/3.0;
  points = [];
  canvasSize = 300;
  createCanvas(canvasSize,canvasSize);
}

function draw() {
  background(255);
  var dt = 0.01;
  var dx = (a * ( y - x )) * dt;
  var dy = (x * ( b - z ) - y) * dt;
  var dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;
  var array = [x,y];
  translate(canvasSize/2,canvasSize/2);
  scale(canvasSize/200);
  points.push(array);
  beginShape();
  for (var i = 0; i < points.length; i++) {
    noFill();
    stroke(0)
    strokeWeight(.1);
    tmp = points[i];
    vertex(tmp[0],tmp[1]);
  
    
  }
  endShape();
  //console.log(points);
  
}