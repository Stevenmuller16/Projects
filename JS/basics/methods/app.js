var button = document.getElementById("button1");
var body = document.querySelector("body");

var checked = false;

button.addEventListener("click", function(){

    if(checked == false){
        body.style.background = "purple";
        checked = true;
    }else{
        body.style.background = "white";
        checked = false;
    }

});