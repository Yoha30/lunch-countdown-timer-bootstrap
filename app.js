setInterval(function (){
var countdate = new Date("27 Sep , 2021 , 22:00:00").getTime();
var today = new Date().getTime();
var timeLeft = countdate - today;
var days = Math.floor(timeLeft/(1000*60*60*24));
var hours = Math.floor(timeLeft % (1000*60*60*24)/(1000*60*60));
var mins = Math.floor(timeLeft % (1000*60*60)/(1000*60));
var sec = Math.floor(timeLeft % (1000*60)/1000);
document.getElementById('date').innerText = "0" + days;
document.getElementById('hours').innerText = hours;
document.getElementById('mins').innerText = mins;
document.getElementById('sec').innerText = sec;
},1000);