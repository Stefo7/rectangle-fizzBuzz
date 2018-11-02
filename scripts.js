
var canvas = document.getElementById('myCanvas');

var rectangle = canvas.getContext('2d');
var x = 0;
var y = 0;
var rectangleColor = 'rgba(41, 41, 41, 0.5)';

function draw() {
rectangle.fillStyle= rectangleColor;
rectangle.fillRect(x,y,30, 22);
}

for (var i = 1; i < 16; i++) {
  x += 12;
  y += 8;
  if (i%3 == 0 && i%5 == 0) {
    rectangleColor='rgba(0, 255, 0, 0.5)';
  } else if (i%5 == 0) { 
    rectangleColor = 'rgba(255, 255, 0, 0.5)';   
  } else if (i%3 == 0) {
    rectangleColor = 'rgba(0, 0, 255, 0.5)';
  } else {
    rectangleColor = 'rgba(41, 41, 41, 0.5)';
  }
  draw();
}
