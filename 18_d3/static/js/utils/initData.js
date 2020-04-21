// Returns GeoJSON data
const getMapData = () => {
  const cachedUSStatesJSON = JSON.parse(localStorage.getItem('USStatesJSON'));
  return cachedUSStatesJSON;
};

// Returns the COVID-19 data
const getCOVIDData = () => {
  const cachedUSStatesCOVIDCSV = JSON.parse(
    localStorage.getItem('USStatesCOVIDCSV')
  );
  return cachedUSStatesCOVIDCSV;
};

// Initialize data caching
cacheData('USStatesJSON', '/static/json/us-states.json', 'JSON');
cacheData('USStatesCOVIDCSV', '/static/csv/us-states-covid.csv', 'CSV');
