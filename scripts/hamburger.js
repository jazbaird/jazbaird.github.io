
function myMenu () {
    var x = document.getElementById("myHome");
    if (x.className === "hide-nav"){
        x.className += "show-nav";
    }
    else {
    x.className = "show-nav";
    }
}