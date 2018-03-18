var requestURL = "http://api.wunderground.com/api/ac1c7a4642e5c719/conditions/forecast/q/MN/Franklin.json";
var weatherObj = new XMLHttpRequest();
weatherObj.open('GET', requestURL, true);
weatherObj.send();

weatherObj.onload = function () {
    var weatherInfo = JSON.parse(weatherObj.responseText);
    document.getElementById('wcurrent').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_today_in;
    document.getElementById('speed').innerHTML = weatherInfo.current_observation.speed;
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_string;
}

