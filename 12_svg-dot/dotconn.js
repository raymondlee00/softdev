"use strict";

const pic = document.getElementById("vimage");
const clearBtn = document.getElementById("clearBtn");
const xmlns = "http://www.w3.org/2000/svg";
let firstClick = true;
const lastClickCoords = {
  x: 0,
  y: 0
};

const drawDot = (mouseX, mouseY) => {
  const mouseCoordsString = `${mouseX},${mouseY}`;
  console.log(`Drawing a circle at (${mouseCoordsString})`);
  const dot = document.createElementNS(xmlns, "circle");
  dot.setAttribute("cx", mouseX);
  dot.setAttribute("cy", mouseY);
  dot.setAttribute("r", 10);
  dot.setAttribute("fill", "lightgreen");
  pic.appendChild(dot);
};

const drawLine = (mouseX, mouseY) => {
  const line = document.createElementNS(xmlns, "line");
  line.setAttribute("x1", lastClickCoords.x);
  line.setAttribute("y1", lastClickCoords.y);
  line.setAttribute("x2", mouseX);
  line.setAttribute("y2", mouseY);
  line.setAttribute("stroke", "black");
  pic.appendChild(line);
};

const clear = () => {
  pic.innerHTML = "";
  firstClick = true;
};

const draw = event => {
  const mouseX = event.offsetX;
  const mouseY = event.offsetY;

  drawDot(mouseX, mouseY);

  if (firstClick) {
    firstClick = false;
  } else {
    drawLine(mouseX, mouseY);
    drawDot(lastClickCoords.x, lastClickCoords.y);
    drawDot(mouseX, mouseY);
  }

  lastClickCoords.x = mouseX;
  lastClickCoords.y = mouseY;
};

pic.addEventListener("mousedown", draw);
clearBtn.addEventListener("click", clear);
