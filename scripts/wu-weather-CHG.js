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

function weatherInfo(jsonObj) {
      var conditions = jsonObj['conditions'];
      var forecast = jsonObj['forecast'];
      for(var i = 0; i < weather.length; i++) {
        var myArticle = document.createElement('article');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myImg = document.createElement('img');  
        var myPara4 = document.createElement('p');
        myPara1.textContent = 'Current Weather: ' + current_observation.weather;
        myPara2.textContent = 'Current Temperature: ' + condition.temp_f;
        myPara3.textContent = 'Current Wind Speed:' + conditions.wind_mph;
        myImg.imageRendering = weatherIcon[i].img;
          
        var currentWeather = weather[i].current;
        for(var j = 0; j < scurrentWeather.length; j++) {
          var listItem = document.createElement('li');
          listItem.textContent = currentWeather[j];
          myList.appendChild(listItem);
          myArticle.appendChild(myH2);
          myArticle.appendChild(myPara1);
          myArticle.appendChild(myPara2);
          myArticle.appendChild(myPara3);
          myArticle.appendChild(myList);
          section.appendChild(myArticle);
      }
    }
}