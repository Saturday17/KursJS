var points = ":";
function taimer(){
var clock = document.getElementById("taim");
var date = new Date();
var hours = 23 - date.getHours();
if (hours<10) hours = "0"+hours;
var minutes = 59 - date.getMinutes();
if (minutes<10) minutes = "0"+minutes;
var seconds = 60 - date.getSeconds();
if (seconds<10) seconds = "0"+seconds;
document.getElementById("taim").innerHTML=hours+points+minutes+points+seconds; 
points = points == ':' ? ' ' : ':';
setTimeout("taimer()",500); 
}