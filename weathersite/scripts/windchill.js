var wch = doWindChill();

document.getElementById("windchill").innerHTML = wch;

function doWindChill(){
    var h = parseInt(document.getElementById("hi").value);
    var l = parseInt(document.getElementById("lo").value);
    
    var temp = (h + l)/2
    
    var speed = parseInt(document.getElementById("speed").value);
	   s = Math.pow(speed, 0.16)
    var wc = windChill(temp,speed);
	
return wc;
}

function windChill(t, s){
		return 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

}