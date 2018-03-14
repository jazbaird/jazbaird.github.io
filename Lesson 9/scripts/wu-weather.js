var requestURL = "http://api.wunderground.com/api/ac1c7a4642e5c719/conditions/forecast/q/MN/Franklin.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function () {
    var franklinWeather = JSON.parse(request.responseText);
    document.getElementById('desc').innerHTML = franklinWeather.current_observation.weather; 
}

function franklinWeather(jsonObj) {
      var conditions = jsonObj['conditions'];
      var forecast = jsonObj['forecast'];
      for(var i = 0; i < weather.length; i++) {
        var myArticle = document.createElement('article');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myImg = document.createElement('img');  
        var myPara4 = document.createElement('p');
        myPara1.textContent = 'Current Weather: ' + conditions.weather;
        myPara2.textContent = 'Current Temperature: ' + condition.temp_f;
        myPara3.textContent = 'Current Wind Speed:' + conditions.wind_mph;
        myImg.imageRendering = weatherIcon[i].img;
        myPara4.textContent = forecast.simpleforecast:forecastday:conditions;  
        var currentWeather = weather[i].current;
        for(var j = 0; j < scurrentWeather.length; j++) {
          var listItem = document.createElement('li');
          listItem.textContent = currentWeather[j];
          myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
      }