var section = document.getElementById('Yaaa');
var requestURL = "http://api.wunderground.com/api/ac1c7a4642e5c719/conditions/forecast/q/MN/Franklin.json";
var weatherObj = new XMLHttpRequest();

weatherObj.open('GET', requestURL, true);
weatherObj.send();
var jsonObj= weatherObj.response;
//weatherObj.onload = function () {
//    var weatherInfo = JSON.parse(weatherObj.responseText);
//    document.getElementById('hi').innerHTML = weatherInfo(jsonObj).simpleforecast:forecastday.high;
//    document.getElementById('lo').innerHTML = weatherInfo.simpleforecast:forecastday.low;
//    document.getElementById('wcurrent').innerHTML = weatherInfo.current_observation.weather;
//    document.getElementById('w_icon').src = weatherInfo.current_observation.icon;
//    document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_today_in;
//    document.getElementById('speed').innerHTML = weatherInfo.current_observation.speed;
//    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_string;
//}
weatherInfo(jsonObj);

function weatherInfo(jsonObj) {
      var conditions = jsonObj['conditions'];
      var forecast = jsonObj['simpleforecast'];
        var myArticle = document.createElement('article');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myImg = document.createElement('img');  
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');  
        myPara1.textContent = 'High: ' + simpleforecast.forecastday.high;
        myPara2.textContent = 'Low: ' + simpleforecast.forecastday.low;
        myPara3.textContent = 'Currently:' + current_observation.weather;
        myImg.imageRendering = current_observation.icon;
        myPara4.textContent = 'Precipitation: ' + weatherInfo.current_observation.precip_today_in;
        myPara5.textContent = 'Wind Speed ' + weatherInfo.current_observation.speed; 
          
          myArticle.appendChild(myPara1);
          myArticle.appendChild(myPara2);
          myArticle.appendChild(myPara3);
          myArticle.appendChild(myImg);
          myArticle.appendChild(myPara4);
          myArticle.appendChild(myPara5);    
          section.appendChild(myArticle);
      
    
}