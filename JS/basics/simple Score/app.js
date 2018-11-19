var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var Reset = document.getElementById("Reset");
var maxScore = 5;//document.querySelector("#maxScore");
var numInput = document.querySelector("input");
var playingTo = document.querySelector("#scoreMaxDisp");


var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;

p1Button.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    if(p1Score === maxScore){
        gameOver =true;
        p1Display.classList.add("winner");
    }
    p1Display.textContent = p1Score;
    
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
    if(p1Score === maxScore){
        gameOver = true;
        p2Display.classList.add("winner");
    }
    p2Display.textContent = p2Score;
    }
});

Reset.addEventListener("click", function(){
   reset();

});

numInput.addEventListener("change", function(){

    playingTo.textContent = this.value;
    maxScore = Number(this.value);
    reset();

});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}