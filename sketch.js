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
  canvasSize = 1000;
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
  points.push(array);
  var hu = 0.0;
  beginShape();
  for (var i = 0; i < points.length; i++) {
    noFill();
    stroke(hu,255,255);
    tmp = points[i];
    vertex((canvasSize / 2) + tmp[0],(canvasSize / 2) + tmp[1]);
    hu += 0.1;
    if (hu > 255) {
      hu = 0;
    }
    
  }
  endShape();
  //console.log(points);
  
}