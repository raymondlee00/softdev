// retrieve node in DOM via ID
var canvas = document.getElementById("slate");

// instantiate a CanvasRenderingContext2D object
var ctx = canvas.getContext("2d");

// invoke interface methods
ctx.fillStyle = "#ff0000";

var mode = "rectangle";

function draw(event) {
  // correct canvas bounds offset on mouse's x, y position
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  if (mode == "rectangle") {
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
    ctx.strokeStyle = "#003300";
    ctx.stroke();
  }
}

function clearRect() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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