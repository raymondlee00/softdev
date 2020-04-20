//Credit: http://bl.ocks.org/michellechandra/0b2ce4923dc9b5809922 for showing how to display an interactable US map
//Width and height of map
const width = 1200;
const height = 600;

// D3 Projection
const projection = d3.geo
  .albersUsa()
  .translate([width / 2, height / 2]) // translate to center of screen
  .scale([1200]); // scale things down so see entire US

// Define path generator
const path = d3.geo
  .path() // path generator that will convert GeoJSON to SVG paths
  .projection(projection); // tell path generator to use albersUsa projection

//Create SVG element and append map to the SVG
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const cachedUSStatesJSON = JSON.parse(localStorage.getItem('USStatesJSON'));

const drawUSStatesPath = (json) => {
  svg
    .selectAll('path')
    .data(json.features)
    .enter()
    .append('path')
    .attr('d', path)
    .style('stroke', '#fff')
    .style('stroke-width', '1')
    .style('fill', () => 'Crimson');
};

if (!cachedUSStatesJSON) {
  // Load GeoJSON data and merge with states data
  d3.json('/static/json/us-states.json', (json) => {
    // Bind the data to the SVG and create one path per GeoJSON feature
    localStorage.setItem('USStatesJSON', JSON.stringify(json));
    drawUSStatesPath(json);
  });
} else {
  drawUSStatesPath(cachedUSStatesJSON);
}
