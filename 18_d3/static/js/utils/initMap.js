// Credits to http://bl.ocks.org/michellechandra/0b2ce4923dc9b5809922 for showing how to display an interactable US map

// Create paths for all states using GeoJSON data
const createStatePaths = (svg, path) => {
  const json = getMapData();
  svg
    .selectAll('path')
    .data(json.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('data-state', (d) => d.properties.name) // Associate path's custom data attribute with corresponding state
    .attr('data-cases', 0) // Initialize all states with 0 cases
    .style('stroke', 'salmon')
    .style('stroke-width', '1')
    .style('fill', '#fff');
};

// Create labels for all states
const labelStatePaths = (svg, path) => {
  const json = getMapData();

  svg
    .selectAll('text')
    .data(json.features)
    .enter()
    .append('text')
    .text('0')
    .attr('x', (d) => {
      const xCentroid = path.centroid(d)[0]; // Check for paths where their centroid is NaN (ex: Puerto Rico)
      if (Number.isNaN(xCentroid)) return; // Solves console error: <text> attribute x: Expected length, “NaN”
      return path.centroid(d)[0];
    })
    .attr('y', (d) => {
      const yCentroid = path.centroid(d)[1];
      if (Number.isNaN(yCentroid)) return;
      return path.centroid(d)[1];
    })
    .attr('id', (d) => d.properties.name) // Associate text's custom data attribute with corresponding state
    .style('color', 'black');
};

// Setup map
const setupMap = () => {
  const width = 1200;
  const height = 600;

  const projection = d3
    .geoAlbersUsa()
    .translate([width / 2, height / 2])
    .scale([1300]);

  const path = d3.geoPath(projection);

  const svg = d3
    .select('#map')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  createStatePaths(svg, path);
  labelStatePaths(svg, path);
};
