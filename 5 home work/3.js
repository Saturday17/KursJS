var str=prompt("Введите строку на латинице, с большой буквы, без пробелов и закончите предложение точкой: ");
str=String(str);
var reg = /^[A-Z][a-z]+\.$/g;
if (reg.test(str)){
	alert("Строка введена корректно");
} else alert("Допущена ошибка");