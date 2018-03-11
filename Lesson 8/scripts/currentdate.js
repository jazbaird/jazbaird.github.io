    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var month = new Array(3);
    month [0] = "January";
    month [1] = "February";
    month [2] = "March";

    var n = weekday[d.getDay()];
    var m = month[d.getMonth()];
    var a = d.getDate();
    var y = d.getFullYear();
    
    var k = n + ", " + a + " " + m + " " + y;
    
    
    document.getElementById("currentdate").innerHTML = k;


