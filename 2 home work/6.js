// Калькулятор
var a=prompt("Enter a");
a=Number(a);
var b=prompt("Enter b");
b=Number(b);
var n=prompt("Enter number of operation");
switch(n) {
	case '+': res=(a+b);
	break;
	case '-': res=(a-b);
	break;
	case '*': res=(a*b);
	break;
	case '/': res=(a/b);
	break;
}
alert(res);