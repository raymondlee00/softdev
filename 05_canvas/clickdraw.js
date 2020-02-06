/*
 * Junhee Lee, Raymond Lee
 * SoftDev2 pd1
 * K05 :: Canvas pt.2: Electric Boogaloo
 * 2020-02-07
 */

/*
 * e.preventDefault()
 * 	prevents the default behavior of an event
 * 	e.g. can prevent the submit button from submitting the form
 *
 * ctx.beginPath()
 * 	starts a path trace that can be committed to the drawing later
 *
 * e.offsetX
 * 	retrieves the mouse x position relative to the canvas
 *
 * e.offsetY
 * 	retrieves the mouse y position relative to the canvas
 *
 */

const RECT_WIDTH = 100;
const RECT_HEIGHT = 100;
const DOT_RADIUS = 5;

const c = document.getElementById("slate");
const ctx = c.getContext("2d");
ctx.fillStyle = "#ffffff";
console.log(ctx);

var mode = "r";

const clearCanvas = function() {
  console.log("clearing drawings");
  ctx.clearRect(0, 0, c.width, c.height);
};

const drawRect = function(x, y) {
  console.log(`drawing rectangle at ${x}, ${y}`);
  x -= RECT_WIDTH / 2, y-= RECT_HEIGHT / 2;
  ctx.fillRect(x, y, RECT_WIDTH, RECT_HEIGHT);
};

const drawDot = function(x, y) {
  console.log(`drawing dot at ${x}, ${y}`);
  ctx.beginPath();
  ctx.arc(x, y, DOT_RADIUS, 0, 2 * Math.PI, false);
  ctx.fill();
};

const draw = function(e) {
  let bound = c.getBoundingClientRect();
  let x = e.clientX - bound.left;
  let y = e.clientY - bound.top;
  if (mode == "r") {
    drawRect(x, y);
  } else {
    drawDot(x, y);
  }
};

c.addEventListener("mousedown", draw);

const cbutton = document.getElementById("clear");
cbutton.addEventListener("click", clearCanvas);

const tbutton = document.getElementById("toggle");

const toggle = function() {
  console.log("toggled mode");
  if (mode == "r") {
    tbutton.innerHTML = "Draw Rectangle";
    mode = "d";
  } else {
    tbutton.innerHTML = "Draw Dot";
    mode = "r";
  }
};

tbutton.addEventListener("click", toggle);
