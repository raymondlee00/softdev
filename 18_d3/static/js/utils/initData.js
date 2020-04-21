// Returns GeoJSON data
const getMapData = () => {
  const cachedUSStatesJSON = JSON.parse(localStorage.getItem('USStatesJSON'));

  if (!cachedUSStatesJSON) {
    d3.json('/static/json/us-states.json')
      .then((json) => {
        localStorage.setItem('USStatesJSON', JSON.stringify(json));
        return json;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return cachedUSStatesJSON;
};

// Returns the COVID-19 data
const getCOVIDData = () => {
  const cachedUSStatesCOVIDCSV = JSON.parse(
    localStorage.getItem('USStatesCOVIDCSV')
  );

  if (!cachedUSStatesCOVIDCSV) {
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

// Initialize data retrieval
getMapData();
getCOVIDData();
