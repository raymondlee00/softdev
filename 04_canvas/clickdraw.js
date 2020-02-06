// retrieve node in DOM via ID
var canvas = document.getElementById("slate");

// instantiate a CanvasRenderingContext2D object
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#1B1B1B";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var mode = "rectangle";

function draw(event) {
  // correct canvas bounds offset on mouse's x, y position
  let x = event.offsetX;
  let y = event.offsetY;

  if (mode == "rectangle") {
    // invoke interface methods
    ctx.fillStyle = "#ff0000";

    // make it look like square is drawn from the center where user clicks
    x -= 25;
    y -= 25;

    ctx.fillRect(x, y, 50, 50);
  } else {
    var radius = 10;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 0;
    ctx.strokeStyle = "red";
    ctx.stroke();
  }
}

function clearRect() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#1B1B1B";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function switchMode() {
  if (mode == "rectangle") {
    mode = "dot";
  } else {
    mode = "rectangle";
  }
  document.getElementById("draw-mode").innerHTML = "display mode: " + mode;
  console.log(mode);
}
