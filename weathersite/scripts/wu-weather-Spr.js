//populate Greenville with data from Underground Weather site
var weatherSpringfield = new XMLHttpRequest();

weatherSpringfield.open('GET', 'https://api.wunderground.com/api/ac1c7a4642e5c719/conditions/q/MO/Springfield.json', true);
weatherSpringfield.send();

weatherSpringfield.onload = function() {
  var weatherInfo = JSON.parse(weatherSpringfield.responseText);

  document.getElementById('splace').innerHTML = weatherInfo.current_observation.display_location.city;
  document.getElementById('sw-icon').src = weatherInfo.current_observation.icon_url;
  document.getElementById('sweatherString').innerHTML = weatherInfo.current_observation.weather;
  document.getElementById('sprecip').innerHTML = weatherInfo.current_observation.precip_1hr_in;
  document.getElementById('swindSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
  document.getElementById('swindChill').innerHTML = weatherInfo.current_observation.windchill_f;
} //end of onload
var temperatureFranklin = new XMLHttpRequest();

temperatureFranklin.open('GET','https://api.wunderground.com/api/ac1c7a4642e5c719/forecast/q/MO/Springfield.json', true);
temperatureFranklin.send();

temperatureFranklin.onload = function() {
  var temperatureInfo = JSON.parse(temperatureFranklin.responseText);

  document.getElementById('shi').innerHTML = temperatureInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
  document.getElementById('slo').innerHTML = temperatureInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
}
