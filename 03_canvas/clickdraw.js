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
    ctx.fillRect(x, y, 100, 200);
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
  console.log(mode);
}
