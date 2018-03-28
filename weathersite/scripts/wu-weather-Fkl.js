//populate Greenville with data from Underground Weather site
var weatherGreenville = new XMLHttpRequest();

weatherGreenville.open('GET', 'https://api.wunderground.com/api/ac1c7a4642e5c719/conditions/q/MN/Franklin.json', true);
weatherGreenville.send();

weatherGreenville.onload = function() {
  var weatherInfo = JSON.parse(weatherGreenville.responseText);

  document.getElementById('fplace').innerHTML = weatherInfo.current_observation.display_location.city;
  document.getElementById('fw-icon').src = weatherInfo.current_observation.icon_url;
  document.getElementById('fweatherString').innerHTML = weatherInfo.current_observation.weather;
  document.getElementById('fprecip').innerHTML = weatherInfo.current_observation.precip_1hr_in;
  document.getElementById('fwindSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
  document.getElementById('fwindChill').innerHTML = weatherInfo.current_observation.windchill_f;
} //end of onload
var temperatureFranklin = new XMLHttpRequest();

temperatureFranklin.open('GET','https://api.wunderground.com/api/ac1c7a4642e5c719/forecast/q/MN/Franklin.json', true);
temperatureFranklin.send();

temperatureFranklin.onload = function() {
  var temperatureInfo = JSON.parse(temperatureFranklin.responseText);

  document.getElementById('fhi').innerHTML = temperatureInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
  document.getElementById('flo').innerHTML = temperatureInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
}
