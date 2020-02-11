/*
 * doubLee2: Junhee Lee, Raymond Lee
 * SoftDev2 pd1
 * K06 :: Canvas pt. 3
 * 2020-02-11
 */

const DOT_RADIUS = 2;
const c = document.getElementById("playground");
const ctx = c.getContext("2d");

const clearCanvas = function() {
	console.log("clearing drawings");
    ctx.clearRect(0,0,c.width,c.height);
    ctx.closePath();
}

const draw = function(e) {
	let x = e.offsetX;
	let y = e.offsetY;
	console.log(`drawing path to ${x}, ${y}`);
	ctx.lineTo(x, y);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(x,y,DOT_RADIUS,0, 2 * Math.PI, false);
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(x, y);
}

c.addEventListener("mousedown", draw);

const cbutton = document.getElementById("clear");
cbutton.addEventListener("click", clearCanvas);