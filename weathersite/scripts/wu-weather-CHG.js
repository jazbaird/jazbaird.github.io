//populate Greenville with data from Underground Weather site
var weatherGreenville = new XMLHttpRequest();

weatherGreenville.open('GET', 'https://api.wunderground.com/api/ac1c7a4642e5c719/conditions/q/TX/Greenville.json', true);
weatherGreenville.send();

weatherGreenville.onload = function() {
  var weatherInfo = JSON.parse(weatherGreenville.responseText);

  document.getElementById('gplace').innerHTML = weatherInfo.current_observation.display_location.city;
  document.getElementById('gw-icon').src = weatherInfo.current_observation.icon_url;
  document.getElementById('gweatherString').innerHTML = weatherInfo.current_observation.weather;
  document.getElementById('gprecip').innerHTML = weatherInfo.current_observation.precip_1hr_in;
  document.getElementById('gwindSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
  document.getElementById('gwindChill').innerHTML = weatherInfo.current_observation.windchill_f;
} //end of onload
var temperatureFranklin = new XMLHttpRequest();

temperatureFranklin.open('GET','https://api.wunderground.com/api/ac1c7a4642e5c719/forecast/q/TX/Greenville.json', true);
temperatureFranklin.send();

temperatureFranklin.onload = function() {
  var temperatureInfo = JSON.parse(temperatureFranklin.responseText);

  document.getElementById('ghi').innerHTML = temperatureInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
  document.getElementById('glo').innerHTML = temperatureInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
}
