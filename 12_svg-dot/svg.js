const pic = document.getElementById("vimage");
const clearBtn = document.getElementById("#clearBtn");
const xmlns = "http://www.w3.org/2000/svg";
const firstClick = true;
const lastClickCoords = {};

const draw = event => {
  const mouseX = event.offsetX;
  const mouseY = event.offsetY;
  const mouseCoordsString = `${mouseX},${mouseY}`;
  console.log(`Drawing a circle at (${mouseCoordsString})`);
  const dot = document.createElementNS(xmlns, "circle");
  dot.setAttribute("cx", mouseX);
  dot.setAttribute("cy", mouseY);
  dot.setAttribute("r", 10);
  dot.setAttribute("fill", "lightgreen");
  // const line = document.createElementNS(xmlns, "line");
  // let startX = null;
  // let startY = null;
  // if (firstClick) {
  //   lastClickCoords.x = mouseX;
  //   lastClickCoords.y = mouseY;
  // }
  // line.setAttribute("x2", mouseX);
  // line.setAttribute("y2", mouseY);
  // line.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2");
  pic.appendChild(dot);
  // pic.appendChild(line);
};

pic.addEventListener("mousedown", draw);
