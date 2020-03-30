"use strict";

const pic = document.getElementById("vimage");
const clearBtn = document.getElementById("clearBtn");
const xmlns = "http://www.w3.org/2000/svg";
let onDotClick = false;

const createDotElement = (mouseX, mouseY) => {
  const dot = document.createElementNS(xmlns, "circle");
  dot.setAttributeNS(null, "cx", mouseX);
  dot.setAttributeNS(null, "cy", mouseY);
  dot.setAttributeNS(null, "r", 30);
  dot.setAttributeNS(null, "fill", "lightgreen");
  dot.setAttributeNS(null, "data-num-clicks", 0);
  dot.addEventListener("mouseover", () => (onDotClick = true));
  dot.addEventListener("mouseout", () => (onDotClick = false));
  dot.addEventListener("click", e => mutateDot(e));
  return dot;
};

const drawDot = event => {
  const mouseX = event.offsetX;
  const mouseY = event.offsetY;

  if (!onDotClick) {
    const dot = createDotElement(mouseX, mouseY);
    pic.appendChild(dot);
    const mouseCoordsString = `${mouseX},${mouseY}`;
    console.log(`Drawing a circle at (${mouseCoordsString})`);
  }
};

const mutateDot = event => {
  const dot = event.target;
  let numClicks = parseInt(dot.getAttributeNS(null, "data-num-clicks"));
  numClicks++;
  if (numClicks > 1) {
    console.log(numClicks);
  }
  dot.setAttribute("data-num-clicks", numClicks);
  console.log(dot);
};

const clear = () => {
  pic.innerHTML = "";
  onDotClick = false;
};

const draw = event => {
  drawDot(event);
};

pic.addEventListener("click", draw);
clearBtn.addEventListener("click", clear);
