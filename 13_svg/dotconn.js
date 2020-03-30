"use strict";

const pic = document.getElementById("vimage");
const clearBtn = document.getElementById("clearBtn");
const xmlns = "http://www.w3.org/2000/svg";
let onDot = false;

const createDotElement = (dotX, dotY) => {
  const dot = document.createElementNS(xmlns, "circle");
  dot.setAttributeNS(null, "cx", dotX);
  dot.setAttributeNS(null, "cy", dotY);
  dot.setAttributeNS(null, "r", 30);
  dot.setAttributeNS(null, "fill", "lightgreen");
  dot.setAttributeNS(null, "data-num-clicks", 0);
  dot.addEventListener("mouseover", () => (onDot = true));
  dot.addEventListener("mouseout", () => (onDot = false));
  dot.addEventListener("click", e => mutateDot(e));
  // console.log(dot);
  return dot;
};

const drawDot = (dotX, dotY) => {
  console.log("draw dot");
  if (!onDot) {
    const dot = createDotElement(dotX, dotY);
    pic.appendChild(dot);
    const dotCoordsString = `${dotX},${dotY}`;
    console.log(`Drawing a circle at (${dotCoordsString})`);
  }
};

const mutateDot = event => {
  const dot = event.target;
  let numClicks = parseInt(dot.getAttributeNS(null, "data-num-clicks"));
  numClicks++;
  switch (numClicks) {
    case 1:
      dot.style.fill = "green";
      break;
    case 2:
      dot.parentNode.removeChild(dot);
      const randomX = Math.random() * 400 + 50;
      const randomY = Math.random() * 400 + 50;
      drawDot(randomX, randomY);
      console.log("create random dot");
      onDot = false;
      // pic.appendChild(randomDot);
      break;
  }
  dot.setAttributeNS(null, "data-num-clicks", numClicks);
  console.log(dot);
};

const clear = () => {
  pic.innerHTML = "";
  onDot = false;
};

const draw = event => {
  const mouseX = event.offsetX;
  const mouseY = event.offsetY;
  drawDot(mouseX, mouseY);
  // console.log(onDot);
};

pic.addEventListener("click", draw);
clearBtn.addEventListener("click", clear);

setInterval(() => console.log(onDot), 1000);
