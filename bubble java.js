function makebubble(){
    var clutter= "";

for (var i=1;i<=133;i++){
    var rn = Math.floor(Math.random() * 10)
    clutter += `<div id="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;

}
var timer=60;
function runTime(){
  var timer1=  setInterval(function(){
      if (timer>0){
        timer--;
             document.querySelector("#timerval").textContent=timer;
      }
      else{
        clearInterval(timer1);
        document.querySelector("#pbtm").innerHTML="";
        finalScore();

      }
    },1000);

}
var hitrn=0;
function getNwHit(){
  hitrn= Math.floor(Math.random()*10)
 document.querySelector("#Hitnew").textContent= hitrn;
}
var score=0;
function getScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
    document.querySelector("#scoreVal").style.color="blue";

}
function decreseScore(){
    score -= 5;
    document.querySelector("#scoreVal").textContent = score;
    document.querySelector("#scoreVal").style.color="red";
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
   
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        getScore();
        makebubble();
        getNwHit();

    }else if(clickednum !== hitrn){
        decreseScore();
        makebubble();
        getNwHit();
    }
 


 

});
function finalScore(){
    document.querySelector("#pbtm").innerHTML=` <h1>GAME ENDED <br> Your Score is ${score} </h1>`

}

runTime();
makebubble();
getNwHit();
