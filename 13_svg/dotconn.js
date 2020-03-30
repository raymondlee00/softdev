"use strict";

const pic = document.getElementById("vimage");
const clearBtn = document.getElementById("clearBtn");
const xmlns = "http://www.w3.org/2000/svg";
let onDot = false;

const createDotElement = (mouseX, mouseY) => {
  const dot = document.createElementNS(xmlns, "circle");
  dot.setAttributeNS(null, "cx", mouseX);
  dot.setAttributeNS(null, "cy", mouseY);
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
  // if (numClicks > 1) {
  //   console.log(numClicks);
  // }
  // console.log("before mutation...", onDot);
  switch (numClicks) {
    case 1:
      dot.style.fill = "green";
      break;
    case 2:
      // console.log("before random dot...", onDot);
      dot.parentNode.removeChild(dot);
      const randomX = Math.random() * 400 + 50;
      const randomY = Math.random() * 400 + 50;
      const randomDot = createDotElement(randomX, randomY);
      console.log("create random dot");
      pic.appendChild(randomDot);
      // const jankDot = drawDot(event);
      // jankDot.parentNode.removeChild(jankDot);
      // onDot = false;
      // console.log("after random dot...", onDot);
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
