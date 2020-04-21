// import setMap from './utils/initMap';

// Animation states
let renderMap = false;
let playing = false;

// Handlers
const toggleMapHandler = (event) => {
  event.preventDefault();
  renderMap = true;
  init();
};

const startHandler = (event) => {
  event.preventDefault();
  if (renderMap && !playing) {
    playing = true;
    animateMap();
  }
};

const renderBtn = document.getElementById('render-btn');
renderBtn.addEventListener('click', toggleMapHandler);

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', startHandler);

// Initialize map setup
const init = () => {
  setMap();
};

// export default init;
