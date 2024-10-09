const convertToCelsius = function(tempF) {
  const tempC = (tempF - 32) * (5 / 9);
  return +tempC.toFixed(1)
}; 

const convertToFahrenheit = function(tempC) {
  const tempF = (tempC * (9 / 5) + 32);
  return +tempF.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
