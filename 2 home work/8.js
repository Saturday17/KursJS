// Подсчёт секунд до конца текущего дня
var n = new Date();
var nextday = new Date(n.getFullYear(), n.getMonth(), n.getDate()+1);
var res = nextday - n;
console.log(res);
