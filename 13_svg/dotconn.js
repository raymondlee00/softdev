"use strict";

const pic = document.getElementById("vimage");
const clearBtn = document.getElementById("clearBtn");
const xmlns = "http://www.w3.org/2000/svg";
let onDotClick = false;

const drawDot = (mouseX, mouseY) => {
  const mouseCoordsString = `${mouseX},${mouseY}`;
  console.log(`Drawing a circle at (${mouseCoordsString})`);
  const dot = document.createElementNS(xmlns, "circle");
  dot.setAttribute("cx", mouseX);
  dot.setAttribute("cy", mouseY);
  dot.setAttribute("r", 30);
  dot.setAttribute("fill", "lightgreen");
  dot.setAttribute("data-num-clicks", 0);
  dot.addEventListener("mouseup", e => mutateDot(e));
  if (!onDotClick) {
    pic.appendChild(dot);
  } 
};

const mutateDot = event => {
  onDotClick = true;
  const dot = event.target;
  let numClicks = parseInt(dot.getAttribute("data-num-clicks"));
  numClicks++;
  if (numClicks > 1) {
    console.log(numClicks);
  }
  dot.setAttribute("data-num-clicks", numClicks);
  console.log(dot);
  onDotClick = false;
};

const clear = () => {
  pic.innerHTML = "";
  onDotClick = false;
};

const draw = event => {
  const mouseX = event.offsetX;
  const mouseY = event.offsetY;

  if (!onDotClick) {
    drawDot(mouseX, mouseY);
  }
};

pic.addEventListener("mousedown", draw);
clearBtn.addEventListener("click", clear);
