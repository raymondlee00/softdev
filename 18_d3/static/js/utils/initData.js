// Returns GeoJSON data for setMap to use
const getMapData = () => {
  const cachedUSStatesJSON = JSON.parse(localStorage.getItem('USStatesJSON'));

  if (!cachedUSStatesJSON) {
    // Load GeoJSON data and merge with states data
    d3.json('/static/json/us-states.json')
      .then((json) => {
        // Bind the data to the SVG and create one path per GeoJSON feature
        localStorage.setItem('USStatesJSON', JSON.stringify(json));
        return json;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return cachedUSStatesJSON;
};

const getCOVIDData = () => {
  const cachedUSStatesCOVIDCSV = JSON.parse(
    localStorage.getItem('USStatesCOVIDCSV')
  );

  if (!cachedUSStatesCOVIDCSV) {
    // Load COVID-19 data
    d3.csv('/static/csv/us-states-covid.csv')
      .then((json) => {
        localStorage.setItem('USStatesCOVIDCSV', JSON.stringify(json));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return cachedUSStatesCOVIDCSV;
};

// export { getMapData, getCOVIDData };
